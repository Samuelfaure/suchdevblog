---
title: Upload Files from Vue.js to Rails with ActiveStorage
description: More complicated than you'd think.
footer: MIT Licensed | Copyright © 2019-present by Samuel Faure <3
---

# Upload Files from Vue.js to Rails with ActiveStorage

Simple enough, isn't it ? Well, no, but yes, but maybe I'll just be honest there and confess this took me way longer than I'd love to admit.

The goal of the game is to create an Item from a Vue.js user form, and store it quietly in our Ruby on Rails API, using ActiveStorage. An item will have a name, description, and of course, the user-uploaded picture ! We're going to build a Vue.js component and the Rails controller. Let's dance !

## Our Vue.js Form Component

### The HTML Template

```html
<template>
  <div>
    <h2>Add an item</h2>
    <form enctype="multipart/form-data">
      <p>Name: </p><input v-model="inputName">
      <p>Description :</p><textarea v-model="inputDescription"></textarea>
      <p>Picture :</p><input type="file" ref="inputFile" @change=uploadFile()>
      <button @click=createItem>Create this Item !</button>
    </form>
  </div>
</template>
```

The HTML part is simple enough. Make sure to add that `enctype="multipart/form-data"`.
Another possibility is to just add `Content-Type: multipart/form-data` to the header of our javascript POST request. But I prefer adding complexity to HTML instead.

Please also notice how we activate the function `uploadFile()` when a change is detected on the file upload button.

### The Javascript

```Javascript

export default {
  name: 'itemsForm',
  // Here is the data we get from our HTML Form.
  data () {
    return {
      inputName: "",
      inputDescription: "",
      inputPicture: null
    }
  },
  methods: {
    // Saving the file in our data to send it !
    uploadFile: function() {
      this.inputPicture = this.$refs.inputFile.files[0];
    },

    // Collecting everything inside our FormData object
    createItem: function() {
      const params = {
        'name': this.inputName,
        'description': this.inputDescription,
        'picture': this.inputPicture
      }

      let formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) => formData.append(key, value)
      )
  
      // Finally, sending the POST request with our beloved Axios
      axios.post('/item', formData)
    }
  }
}
```

No black magic there, everything is simple. We iterate over the params to add them to a FormData object, then we send it.

## Our Rails Controller

```ruby
class ItemsController < ApplicationController
  def create
    item = Item.create item_params
    # Attach picture to our item, if available
    attach_main_pic(item) if admin_params[:picture].present?

    # Reply with success if the object was saved, or failure if it was not.
    if item.persisted?
      render json: item, status: 200
    else
      render json: item, status: 400
    end
  end

  private

  def attach_main_pic(item)
    item.picture.attach(admin_params[:picture])
  end

  def item_params
    {
      name: admin_params[:name],
      description: admin_params[:description],
    }
  end

  def admin_params
    params.permit(
      :name,
      :description,
      :picture
    )
  end
end
```

Don't forget to add `post 'items' => 'items#create'` to your Rails routes. You might also need to deactivate the parameter wrapping in the initializers.

## What else to do ?

I kept the code simple there, but obviously you should add validations in the controller, both on size and file types. You don't want just any crap taking all your precious server space !

If you want multiple file upload, [Check out this link !](https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2)
