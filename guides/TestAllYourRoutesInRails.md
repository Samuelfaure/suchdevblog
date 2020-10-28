---
title: Test all your GET routes in rails with 20 lines of code
description: Wow Rails, Much testing, Very secure
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---
# Test all your GET routes in rails with 20 lines of code

## What and Why?

A great friend of mine -who also happen to be a great senior rails developer- told me once a great trick to increase your code coverage easily. You can just write a test to check if all your GET routes return a non-errored code.

Indeed, the most important information to check about our static GET pages is to know if they are currently erroring or not. So a quick test to check if those pages are working is a very easy win.

## The code itself

```ruby
# frozen_string_literal: true

require 'rails_helper'

describe Rails.application.routes do
  describe '#get', type: :request do
    let(:routes_info) { described_class.routes }
    let(:routes_get) { routes_info.select { |r| r.verb == 'GET' } }
    let!(:domiciliation) { create(:domiciliation) }

    specify 'GET routes returns 200, 301 or 302 code' do
      routes_get.each do |route|
        route = route.path.spec.to_s.gsub(/\(.:format\)*$/, '')

        get route_with_params(route, domiciliation)
        expect(response.status).to eq(200).or eq(301).or eq(302)
      end
    end

    def route_with_params(route, domiciliation)
      route.gsub!(':security_token', domiciliation.security_token)
    end
  end
end
```
