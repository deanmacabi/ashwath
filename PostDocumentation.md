---
layout: post
title: Documentation
description: Documentation will have all the features of the theme mentioned in sections. You can delete this after installation but it is good to keep it as unpublished so that only you can read it.
categories: general
author: ashwathama
---

## Features

* Do not remove this line (it will not be displayed) 
{:toc}

### Smartphone App like Layout
The theme is designed keeping smartphones users in mind. An app like design is more comfortable to use on a mobile browser.  

### Minimal & Responsive Card Layout
The theme uses a minimal layout for simplicity. Only the things that matter are shown on the homepage. 
**Images:**

Small images will be shown at their actual size.
![small image]({{site.baseurl}}/images/ashwathama-1.jpg)


Large images will always scale down and fit in the content container.
![large image]({{site.baseurl}}/images/lost-1.jpg)

**Videos:**

Whenever you add a video, make sure you use the class ``video`` in the iframe or video container. You can also use the shortcode {% raw %}{: .video}{% endraw %} to make the video responsive.

Consider this video for example. If you resize the window to a smaller viewport, the video resizes itself!

<iframe width="854" height="480" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
{: .video}

The code is here
{% highlight html %}
<iframe width="854" height="480" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
{% raw %}{: .video}{% endraw %}
{% endhighlight %}

Take a look at [example post]({{site.baseurl}}/example/){: target="blank"} to check responsive nature of other elements.

### 20 Color Schemes (full version)!
Customize the theme as you like by using color schemes!

#### Purple

![Purple jekyll theme]({{site.baseurl}}/images/Purple.png){: .shadow}

Check [Color Schemes]({{site.baseurl}}/color-schemes/){: target="_blank"} for more.


### Search Engine Optimized
The theme is optimized for search engines by default.

### 3 Customizable categories
By default, the theme has 3 categories.

1. Design
2. Code
3. Life

You can always change these to your liking or add extra categories by making little changes in the code. Support and directions will be provided upon buying full version.

### Reading Time Estimation
Posts will show an average time required to read the content. 


### Card Themed Author Section
The theme features a card layout theme for author section. It also has social follow buttons.

### Social Share Buttons
Social sharing is kept after every post by default. The code uses only Liquid coding, no js.

### Pre-installed Disqus Comments
Disqus is pre-installed in the theme. You can sign up with Disqus and change the short-name in _config.yml file or leave it blank to not show any comment section. By default, it is left blank.

### Google Analytics
Google analytics is also included in the theme. Just insert UA code in the configuration file. If left blank, the code will not run.

### Built-in Contact Form
In the [contact]({{site.baseurl}}/contact/){: target="_blank"} page, a contact form is included by default. You can make it work by changing the simpleform-token which can be obtained for free from https://getsimpleform.com/

### Syntax Highlighting
Syntax highlighting is done by rouge. Check [example post]({{site.baseurl}}/example/){: target="_blank"}.

### Dynamic RSS Feed
RSS feed is generated dynamically as and when you add posts and pages.

### Responsive Author Section (full version)
A beatiful, responsive, card layout author section.

---
layout: post
title:  "Welcome to Jekyll!"
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.
date:   2016-09-10 10:50:00 +0530
categories: code design
author: ashwathama
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}




Check out [full version]({{site.full-url}}){: target="_blank"}

<style>.shadow{
    box-shadow: 2px 2px 5px #aaa;
    border-radius: 0;
}</style>
