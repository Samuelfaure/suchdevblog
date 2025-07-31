---
title: 💎 Test all your GET routes in rails with 20 lines of code
description: Wow Rails, Much testing, Very secure
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---
# 💎 Test all your GET routes in rails with 20 lines of code

## What and Why?

A great friend of mine (who also happens to be a great rails developer) told me once a great trick to increase your code coverage easily. You can just write a test to check if all your GET routes return a non-errored code.

Indeed, the most important information to check about our static GET pages is to know if they are currently erroring or not. So a quick test to check if those pages are working or not is a great low-hanging fruit.

## The code itself

To be run with the RSpec framework:

```ruby
# frozen_string_literal: true

require 'rails_helper'

describe Rails.application.routes do
  describe '#get', type: :request do
    let(:routes_info) { described_class.routes }
    let(:routes_get) { routes_info.select { |r| r.verb == 'GET' } }
    let!(:user) { create(:user) }

    specify 'GET routes returns 200, 301 or 302 code' do
      routes_get.each do |route|
        route = route.path.spec.to_s.gsub(/\(.:format\)*$/, '')

        get route_with_params(route, user)
        expect(response.status).to eq(200).or eq(301).or eq(302)
      end
    end

    def route_with_params(route, user)
      route.gsub!(':user_id', user.id)
    end
  end
end
```

And that's pretty much it ! As you can see, we just extract all the routes from the Rails application and check that they return a valid code.

There is but one slightly complex point: some of the routes tested might need a parameter, such as a user ID. We use the method `route_with_params` to inject a user ID in those routes.

Voilà, you might have gotten a great boost to your code coverage with just 20 easy lines of code!

Happy coding to all!
