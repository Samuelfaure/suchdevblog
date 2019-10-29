---
title: Filter Anything in a Rails request in 10 lines of code
description: Wow Rails, Has scope, Very powerful
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---
# Filter anything in a Rails request with almost no code

## Context (What and Why ?)

One of my first missions in my webdev career was developing an Open Data API.
Basically, you have this huge database of french companies, and
what better way to support open data than building and hosting a cool Rails API
where anyone can access the information ?

Since it was my first professional project, the API obviously wasn't as great as it could have been. One problem I often faced was enthusiastic users with very specialized needs. I had manually added a lot of options, but each user's needs were so specific it was often not enough.

Some time after, the data had switched format, and I used this opportunity to build a new version of the API. I decided it would be great to let the users filter their requests using any field in the database.

**tl;dr: Instead of bloating your controllers with filtering options, generate filters automatically based on your model's attributes !**

## Introducing : has_scope

The brillant gem [has_scope](https://github.com/plataformatec/has_scope) is built by the amazing team behind the famous gem Devise.

What it does : if you define an ActiveRecord scope in your models, you can allow your users to
use them from your controllers.

You can go read the README, but basically, declaring `has_scope :is_open` in a Company controller and
`scope :in_paris, ->() (where(city: 'Paris'))` in a Company model will allows your users to request only the companies from Paris :

`GET /companies?in_paris`

## Making it bigger

This is all and well, but I have three tables in my database, each of them having 30 to 40 different fields. I'm not going to copy-paste my scopes a hundred times.

I wrote the following controller and module concern for this purpose :

```ruby
module Scopable
  # This part goes into your controllers
  module Controller
    extend ActiveSupport::Concern

    # Add has_scope for each model attribute
    included do
      # controller_name.classify.constantize => Get model class from controller
      # You need to follow Rail's conventions for this to work
      controller_name.classify.constantize.attribute_names.each do |a|
        has_scope a.to_sym, ->(value) { where(Hash[a, value]) }, only: :show
      end
    end
  end

  # This part goes into your models
  module Model
    extend ActiveSupport::Concern

    # Add scope for each model attribute
    included do
      # Getting the model from itself is easier !
      self.attribute_names.each do |a|
        scope a.to_sym, ->(value) { where(Hash[a, value]) }
      end
    end
  end
end
```

To use it, just include the right concern in model and controller :

```ruby
# Model
class Company < ApplicationRecord
  include Scopable::Model
end
```

```ruby
# Controller
class CompanyController < ApplicationController
  include Scopable::Controller

  def show
    results = apply_scopes(Company).all
    render json: results, status: 200
  end
end
```

Now your users can filter any requests from any fields !

## Security

`has_scope` disallow use of hashes or arrays by default (althought it is still
possible to use them, as long as you predefine them). This removes the need for
defining strong params.

## Testing

The `Scopable` module is model-agnostic. Obviously, the tests should be as well.
Now the best way would be to test it with a fake test class, but this would
require registering a fake table in the test database, which is icky.

The other best way is to use Rspec's shared_examples :

```ruby
# Need to pass in arguments the tested model, and two fields to test the filtering
shared_examples 'scopable' do |model, field_1, field_2|
  describe '#show', type: :request do
    let!(:instance_1) { create(model, field_1 => '001', field_2 => 'Foo') }
    let!(:instance_2) { create(model, field_1 => '002', field_2 => 'Bar') }
    let!(:instance_3) { create(model, field_1 => '003', field_2 => 'Bar') }

    it 'can filter with 1 field' do
      get "/#{model.to_s}?#{field_1.to_s}=001"

      expect(json_response.size).to eq(1)
      expect(json_response.first["#{field_1.to_s}"]).to eq('001')
    end

    it 'can filter multiple fields' do
      get "/#{model.to_s}?#{field_1.to_s}=001&#{field_2.to_s}=Foo"

      expect(json_response.size).to eq(1)
      expect(json_response.first["#{field_1.to_s}"]).to eq('001')
    end

    it 'can return multiple results' do
      get "/#{model.to_s}?#{field_2.to_s}=Bar"

      expect(json_response.size).to eq(2)
    end
  end
end

```

And in the spec of any controller where you include the concern :

```ruby
# Specs for CompanyController
require 'rails_helper'

describe CompanyController do
  it_behaves_like 'scopable', :company, :id, :name
end
```

Don't forget also to index on your fields, or your requests will be very slow !

Hope you liked this bit of code !
