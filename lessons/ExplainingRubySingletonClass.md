---
title: Explaining Ruby's Singleton Class (Eigenclass) to confused beginners
description: Much Ruby, Eigenvery, so singleton.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# Explaining Ruby's Singleton Class (Eigenclass) to confused beginners

I got really confused when I started to look up exactly what was the Eigenclass. This confusion was not because of any complexity, but rather because of bad bits of explanations there and there, and no articles to describe the big picture.

So my goal here is to help with that by explaining exactly what is Ruby's Eigenclass and why it's called "The Singleton Class".

To understand the Eigenclass, you just need to know the very basic concepts of Class and Instances. A reminder:

- Classes are what we use to define our objects
- Instances of classes are the objects created by our classes

```ruby
class MyClass
  # Body of class
end

MyClass # => class
MyClass.new # => Instance of MyClass
```

## What's the Eigenclass ?

Here's the bit of information I had the most trouble to find: the Eigenclass is called the Singleton class because *it is a Class that follows the Singleton pattern*.

## The Singleton pattern

The Singleton pattern is simply an object-oriented programming pattern where you make sure to only have 1 and only 1 instance of some class.

Ruby implement the Singleton pattern with a module: just write `Include Singleton` in your class definition and you're good to go.

This module basically hides the `:new` method. `MySingletonObject.new` will always ERROR. Instead, it will give you an `instance` method that will always return the same unique instance of your class.

```ruby
require 'singleton'

class NotSingleton
  # 'initialize' is called everytime an instance is created
  def initialize
    puts 'This will be printed many times'
  end
end

class MySingleton
  include Singleton

  # 'initialize' is called everytime an instance is created
  def initialize
    puts 'This will be printed once'
  end
end

NotSingleton.new # => 'This will be printed many times' 
NotSingleton.new # => 'This will be printed many times' 
NotSingleton.new # => 'This will be printed many times' 

MySingleton.instance # => 'This will be printed once'
MySingleton.instance # Nothing is printed
MySingleton.instance # Nothing is printed
```

This is useful if you ever want to restrict a class so it never creates more than one instance of itself.

## The Eigenclass

When you create an instance of a class, Ruby creates a hidden class, basically a copy of the original class, but that is *owned exclusively by this instance*. This is the Eigenclass. If you modify the Eigenclass of your first instance, it won't change anything for another instance.

```ruby
# This class is NOT a singleton
class ExampleObject
  def printHello
    puts 'Hello'
  end
end

object1 = ExampleObject.new
object2 = ExampleObject.new

object1.printHello # => 'Hello'
object2.printHello # => 'Hello'

def object2.printHello
  puts 'Bonjour'
end

object1.printHello # => 'Hello'
object2.printHello # => 'Bonjour'

```

There we go ! `object2` is not defined in the scope of the class ExampleObject, it is defined by a copy of its class that it carries around. So by redefining a method in `object2`, we "open the Eigenclass" and modify properties just for this object.

Since the Eigenclass can exist only in one instance, it is sometimes called the Singleton class, althought ExampleObject is not a Singleton at all. Only the Eigenclasses of its instances are Singletons, because they each are one and unique.

## The class << self notation

The previous example can be rewritten this way:

```ruby
class ExampleObject
  def printHello
    puts 'Hello'
  end
end

object1 = ExampleObject.new
object2 = ExampleObject.new

class << object2
  def printHello
    puts 'Aloha'
  end
end

object1.printHello # => 'Hello'
object2.printHello # => 'Aloha'

```

As you can see, the `class << object2` syntax is used to access the Eigenclass of `object2`.

Now for the neat trick: you might know that, in Ruby, classes are objects too. In Ruby. Everything is an object !

And the `Class` of any class is always, well, `Class`. I love this about Ruby: it seems to not make any sense, but it actually does, in its own way.

You can try it yourself:

```ruby
# We can create ExampleObject like this :
class ExampleObject
end

# Or like this :
ExampleObject = Class.new

ExampleObject.new.class # => ExampleObject
ExampleObject.class # => Class
Class.class # => Class
ExampleObject.class.class.class.class # => Class
```

So, we just saw that the class `ExampleObject` is an object too, and more precisely, it is an instance of the class `Class`. This must means that it also have its own Eigenclass !

And if the Eigenclass of an instance of your class 'ExampleObject' is somewhat of a copy of the class 'ExampleObject', then the Eigenclass of the class 'ExampleObject' must be somewhat of a copy of the class 'Class'.

```ruby
# Instance of class ExampleObject
ExampleObject.new # => Eigenclass : a copy of ExampleObject

# Instance of class Class
ExampleObject # => Eigenclass : a copy of Class
```

Now, let's say we want to access the Eigenclass of the ExampleObject class.

We can do it this way:

```ruby
class ExampleObject
  # Either inside the definition of the class
  class << self
    def classPrintHello
      puts 'Hello'
    end
  end
end

ExampleObject.classPrintHello # => 'Hello'

# or outside

class << ExampleObject
  def classPrintHello
    puts 'Sayonara'
  end
end

ExampleObject.classPrintHello # => 'Sayonara'
```

As you see here, we don't call the method on an instance of the class (ExampleObject.new) but rather on the class itself (ExampleObject). It's okay though, because ExampleObject is itself an instance of `Class`.

## If you're using Class methods, you're really using the Eigenclass

If you do some Rails, you'll often have in your models:

```ruby
class MyModel
  def self.printHello
    puts 'Hello'
  end
end

MyModel.printHello # => 'Hello'
```

As you can see, defining a method on the `self` object inside a class definition is exactly the same thing as opening the Eigenclass with `class << self`.

`self.printHello` is also called a Class method, to differenciate with an Instance method. See the following:

```ruby
class MyModel
  # Class Method
  def self.printHello
    puts 'Hello'
  end

  # Instance Method
  def printBonjour
    puts 'Bonjour'
  end
end

MyModel.printHello # => 'Hello'
MyModel.new.printHello # => ERROR
MyModel.printBonjour # => ERROR
MyModel.new.printBonjour # => 'Bonjour'
```

So as you see, the *Class method* of your class is actually just an *Instance method* of the Eigenclass of your class.

Don't hesitate and repeat that last sentence to your company's interns: they'll think you're a Ruby genius !

## Conclusion

I hope this article was informative for you. You can find more of those on (my blog)[https://suchdevblog.com/], and good coding !
