---
title: 💎 How to use Solr / Sunspot with Rails
description: Much search, very engine
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---
# 💎 How to use Solr / Sunspot with Rails in 2018 like a peasant

Working on Rails is good. It's fun. It's hipster.

But sometimes you have to use less-hipster stuff, like the search engine Solr. Solr allows you to do very powerful searches. It's used by Netflix, Apple, Reddit, and most importantly, AOL.

Solr can be tricky to use but your main issue won't be Solr, it will be ElasticSearch.

There is a gem called [Sunspot](https://github.com/sunspot/sunspot) that is supposed to allow you to use Solr easily on Rails, but it's not been maintained correctly because everybody already migrated on ElasticSearch. So you will get stuck and then your colleagues will make fun of you for not using ElasticSearch. You will try to find tutorials on the internet, but they are all deprecated because they pre-date ElasticSearch.

But that shouldn't discourage you to use Solr. **Solr is very powerful, mature and well-documented**. Sure you'll stop being invited to office parties because you'll be "the Solr guy" but it can totally be worth it.

Let's look at three powerful implementations for a great FullText search experience :

## Spellchecking Collation

We won't go into the detail of simple spellchecking there, the Sunspot documentation covers it very well.

However, if you need to implement queries of more than one word, you should use collation instead.

In Solr's *schema.xml*, you can see that your queries are tokenized with *StandardTokenizerFactory*, which use whitespace as a token separator. This means that sunspot will separate your words, correct them, and then put them back again together.

### Two points are important to consider there

- Sunspot doesn't require an appearance threshold when spellchecking your words. Which means if you have weird words in your database, you'll also have weird corrections.

  **Example :** You have the following words in your database => "Blu", "House", "Blue".

  You are trying to correct the query "Blue House". "Blue" might get spellchecked to Blu and "House" is spellchecked to "House". You get "Blu house", which yield no results.

  A way to fix this is to force Solr to only correct a word if it's not present enough in the index. This way, you won't have backward corrections.In schema.xml, add this in the spellchecker component :

  ```xml
  <float name="maxQueryFrequency">0.0001</float>
  ```

- Another thing to consider is that sunspot in its last release doesn't allow collation for 1 word.

  This is annoying : your users might query one or more words, and you probably don't want to have to implement different solutions depending on the number of words.

  The best solution is to just use collation all the time, but you have to tweak sunspot for that. [This issue](https://github.com/sunspot/sunspot/issues/752) will show you the line to change : just monkey-patch Sunspot, replace at the end of line the number 2 by 0.
  A pull request was merged to fix this, but it never made its way to a release (at the time of writing, early 2018).

With theses two tips and the documentation, you should be able to implement spellchecking without too many problems.

## Implementing a suggester

Sadly again, Sunspot doesn't implement a suggester. This is very sad, since you need to get suggestions to implement **TypeAhead search**. If you want this fancy feature, you have to implement it yourself.

In schema.xml, add an autocomplete fieldtype, with factories at index time and query time :

```xml
<!-- Custom implementations for autocomplete suggestions -->
<fieldType name="autocomplete" class="solr.TextField" positionIncrementGap="100">
  <analyzer type="index">
    <tokenizer class="solr.KeywordTokenizerFactory"/>
    <filter class="solr.LowerCaseFilterFactory"/>
    <filter class="solr.EdgeNGramFilterFactory" minGramSize="1" maxGramSize="50" />
  </analyzer>
  <analyzer type="query">
    <tokenizer class="solr.KeywordTokenizerFactory"/>
    <filter class="solr.LowerCaseFilterFactory"/>
  </analyzer>
</fieldType>
```

in solrconfig.xml, add your suggestions component. We will be using [AnalyzingLookupFactory](https://lucene.apache.org/solr/6_2_1/solr-core/org/apache/solr/spelling/suggest/fst/AnalyzingLookupFactory.html) as the factory to make everything work, it's a good one for this purpose.

```xml
<!-- Custom search component to configure suggestions -->
<searchComponent name="suggest" class="solr.SuggestComponent">
  <lst name="suggester">
    <str name="name">suggest</str>
    <str name="lookupImpl">AnalyzingLookupFactory</str>
    <str name="storeDir">suggester_analyzinglookupfactory_dir</str>
    <str name="dictionaryImpl">DocumentDictionaryFactory</str>
    <str name="field">autocomplete</str>
    <str name="suggestAnalyzerFieldType">autocomplete</str>
    <str name="exactMatchFirst">true</str>
    <str name="preserveSep">true</str>
    <str name="preservePositionIncrements">true</str>

    <str name="buildOnOptimize">true</str>
    <str name="buildOnStartup">false</str>
    <str name="buildOnCommit">false</str>
  </lst>
</searchComponent>
```

In the same file, also add a request handler for actually asking the suggestions :

```xml
<!-- Custom request handler to configure suggestions -->
<requestHandler name="/suggesthandler" class="solr.SearchHandler" startup="lazy">
  <lst name="defaults">
    <str name="suggest">true</str>
    <str name="suggest.dictionary">suggest</str>
    <str name="suggest.count">10</str>
  </lst>
  <arr name="components">
    <str>suggest</str>
  </arr>
</requestHandler>
```

In your rails app, you can now define the URL to ask the suggestions request handler :

```ruby
  def get_suggestions
    http_session = Net::HTTP.new('localhost', solr_port)
    solr_response = http_session.get(uri_solr)
    extract_suggestions(solr_response.body)
  end

  def uri_solr
    uri = "/solr/#{Rails.env}/suggesthandler?wt=json&suggest.q=#{@keyword}"
    URI.encode(uri)
  end
```

::: danger
Be careful to sanitize your user inputs ! You don't want a Solr request injection !
:::

Lastly, to build the dictionary, I use a custom rake task :

```ruby
def request_build_dictionary
  http_session = Net::HTTP.new('localhost', solr_port)
  http_session.read_timeout = 7200 # 2 hours max to build dictionary
  uri = "/solr/#{Rails.env}/suggesthandler?suggest.build=true"
  http_session.get(uri)
  return
end
```

::: tip
Building a suggestions dictionary takes time and resources. On a 11M entries database, It should take about 40 mins.
I also need to configure sunspot to use 4 gigas of RAM minimum.
:::

You should be able to get suggestions working with that.

## Implementing synonyms

This is an easy one. In your schema.xml, go to your TextField processing :

```xml
<fieldType name="text" class="solr.TextField" omitNorms="false">
  <analyzer>
    <tokenizer class="solr.StandardTokenizerFactory"/>
    <filter class="solr.LowerCaseFilterFactory"/>
  </analyzer>
</fieldType>
```

We're just applying the StandardTokenFactory and the LowerCase one, let's just add a Synonym factory:

```xml
<fieldType name="text" class="solr.TextField" omitNorms="false">
  <analyzer>
    <tokenizer class="solr.StandardTokenizerFactory"/>
    <filter class="solr.LowerCaseFilterFactory"/>
    <filter class="solr.SynonymFilterFactory" synonyms="synonyms.txt" ignoreCase="true" expand="true" tokenizerFactory="solr.StandardTokenizerFactory"/>
    <filter class="solr.SnowballPorterFilterFactory" language="French" />
  </analyzer>
</fieldType>
```

Notice that I also added a SnowballPorterFilterFactory with the setting "French". Now my common linking french words (Le, La, De, Du, Des, Les, a...) will be ignored.

Now add your synonyms in synonyms.txt (same folder as your schema.xml). Example :

```text
av, ave => avenue
bd,bld,blv,bvd => boulevard
ber => berge
brg => bourg
```

That's it. Enjoy powerful, instant fulltext searches on Solr and Rails !
