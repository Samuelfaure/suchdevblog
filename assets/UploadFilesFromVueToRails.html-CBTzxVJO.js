import{_ as t,r as e,o as i,c as p,a as n,b as a,d as o,e as l}from"./app-BXHrzUvv.js";const c={},u=l(`<h1 id="💎-upload-files-from-vue-js-to-rails-with-activestorage" tabindex="-1"><a class="header-anchor" href="#💎-upload-files-from-vue-js-to-rails-with-activestorage"><span>💎 Upload Files from Vue.js to Rails with ActiveStorage</span></a></h1><p>Simple enough, isn&#39;t it ? Well, no, but yes, but maybe I&#39;ll just be honest there and confess this took me way longer than I&#39;d love to admit.</p><p>The goal of the game is to create an Item from a Vue.js user form, and store it quietly in our Ruby on Rails API, using ActiveStorage. An item will have a name, description, and of course, the user-uploaded picture ! We&#39;re going to build a Vue.js component and the Rails controller. Let&#39;s dance !</p><h2 id="our-vue-js-form-component" tabindex="-1"><a class="header-anchor" href="#our-vue-js-form-component"><span>Our Vue.js Form Component</span></a></h2><h3 id="the-html-template" tabindex="-1"><a class="header-anchor" href="#the-html-template"><span>The HTML Template</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Add an item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Description :<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputDescription<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Picture :<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputFile<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>uploadFile()</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>createItem</span><span class="token punctuation">&gt;</span></span>Create this Item !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The HTML part is simple enough. Make sure to add that <code>enctype=&quot;multipart/form-data&quot;</code>. Another possibility is to just add <code>Content-Type: multipart/form-data</code> to the header of our javascript POST request. But I prefer adding complexity to HTML instead.</p><p>Please also notice how we activate the function <code>uploadFile()</code> when a change is detected on the file upload button.</p><h3 id="the-javascript" tabindex="-1"><a class="header-anchor" href="#the-javascript"><span>The Javascript</span></a></h3><div class="language-Javascript line-numbers-mode" data-ext="Javascript" data-title="Javascript"><pre class="language-Javascript"><code>
export default {
  name: &#39;itemsForm&#39;,
  // Here is the data we get from our HTML Form.
  data () {
    return {
      inputName: &quot;&quot;,
      inputDescription: &quot;&quot;,
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
        &#39;name&#39;: this.inputName,
        &#39;description&#39;: this.inputDescription,
        &#39;picture&#39;: this.inputPicture
      }

      let formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) =&gt; formData.append(key, value)
      )
  
      // Finally, sending the POST request with our beloved Axios
      axios.post(&#39;/item&#39;, formData)
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>No black magic there, everything is simple. We iterate over the params to add them to a FormData object, then we send it.</p><h2 id="our-rails-controller" tabindex="-1"><a class="header-anchor" href="#our-rails-controller"><span>Our Rails Controller</span></a></h2><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code><span class="token keyword">class</span> <span class="token class-name">ItemsController</span> <span class="token operator">&lt;</span> ApplicationController
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">create</span></span>
    item <span class="token operator">=</span> Item<span class="token punctuation">.</span>create item_params
    <span class="token comment"># Attach picture to our item, if available</span>
    attach_main_pic<span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token keyword">if</span> admin_params<span class="token punctuation">[</span><span class="token symbol">:picture</span><span class="token punctuation">]</span><span class="token punctuation">.</span>present<span class="token operator">?</span>

    <span class="token comment"># Reply with success if the object was saved, or failure if it was not.</span>
    <span class="token keyword">if</span> item<span class="token punctuation">.</span>persisted<span class="token operator">?</span>
      render json<span class="token operator">:</span> item<span class="token punctuation">,</span> <span class="token symbol">status</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token keyword">else</span>
      render json<span class="token operator">:</span> item<span class="token punctuation">,</span> <span class="token symbol">status</span><span class="token operator">:</span> <span class="token number">400</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">attach_main_pic</span></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    item<span class="token punctuation">.</span>picture<span class="token punctuation">.</span>attach<span class="token punctuation">(</span>admin_params<span class="token punctuation">[</span><span class="token symbol">:picture</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">item_params</span></span>
    <span class="token punctuation">{</span>
      <span class="token symbol">name</span><span class="token operator">:</span> admin_params<span class="token punctuation">[</span><span class="token symbol">:name</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token symbol">description</span><span class="token operator">:</span> admin_params<span class="token punctuation">[</span><span class="token symbol">:description</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">end</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">admin_params</span></span>
    params<span class="token punctuation">.</span>permit<span class="token punctuation">(</span>
      <span class="token symbol">:name</span><span class="token punctuation">,</span>
      <span class="token symbol">:description</span><span class="token punctuation">,</span>
      <span class="token symbol">:picture</span>
    <span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Don&#39;t forget to add <code>post &#39;items&#39; =&gt; &#39;items#create&#39;</code> to your Rails routes. You might also need to deactivate the parameter wrapping in the initializers.</p><h2 id="what-else-to-do" tabindex="-1"><a class="header-anchor" href="#what-else-to-do"><span>What else to do ?</span></a></h2><p>I kept the code simple there, but obviously you should add validations in the controller, both on size and file types. You don&#39;t want just any crap taking all your precious server space !</p>`,16),r={href:"https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=e("ExternalLinkIcon");return i(),p("div",null,[u,n("p",null,[a("If you want multiple file upload, "),n("a",r,[a("Check out this link !"),o(s)])])])}const h=t(c,[["render",d],["__file","UploadFilesFromVueToRails.html.vue"]]),b=JSON.parse(`{"path":"/tutorials/UploadFilesFromVueToRails.html","title":"💎 Upload Files from Vue.js to Rails with ActiveStorage","lang":"en-US","frontmatter":{"title":"💎 Upload Files from Vue.js to Rails with ActiveStorage","description":"More complicated than you'd think.","footer":"CC-BY-4.0 Licensed | Copyright © 2019-present by Samuel Faure <3"},"headers":[{"level":2,"title":"Our Vue.js Form Component","slug":"our-vue-js-form-component","link":"#our-vue-js-form-component","children":[{"level":3,"title":"The HTML Template","slug":"the-html-template","link":"#the-html-template","children":[]},{"level":3,"title":"The Javascript","slug":"the-javascript","link":"#the-javascript","children":[]}]},{"level":2,"title":"Our Rails Controller","slug":"our-rails-controller","link":"#our-rails-controller","children":[]},{"level":2,"title":"What else to do ?","slug":"what-else-to-do","link":"#what-else-to-do","children":[]}],"git":{"updatedTime":1716443511000,"contributors":[{"name":"Samuelfaure","email":"samuel.faure.dev@gmail.com","commits":2}]},"filePathRelative":"tutorials/UploadFilesFromVueToRails.md"}`);export{h as comp,b as data};
