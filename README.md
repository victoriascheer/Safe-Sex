
# A Basic Longform template

[A demo of this framework can be found here.](https://sheffieldjournalism.github.io/multimedia-template/)

[And more examples are here.](https://sheffieldjournalism.github.io/multimedia-template/examples.html)

### Having problems or need help making something work?

Use the **Issues** tab above to post any questions you have about problems or how to do things.

---

This template is in the style of a longform multimedia page. The longform style strips out web page furniture such as masthead, navigation, sidebar etc to focus on the content.

Features of the template include:

- full width/height section headings with static background images
- clear typography
- image/content slider
- scroll animations

## The files

The files you need to edit are:

- **index.html** this is the web page itself
- **style.css** is where the CSS styles go
- js/**index.js** is where the bits of JavaScript go
- **images** is the folder where you put your images and other media

There are also some other files that will help you add additonal content to your page:

- **examples.html** has examples of some different elements or features you could add
- **HTML_snippets.html** has HTML snippets that you can copy/paste and modify


## Structure

The structure of the template is simple. Content is separated into **sections** using the HTML tag ```<section>```.

There are two types of ```<section>```. They are visually different from each other and are differentiated using these **class names**:

- **content** ```<section class="content">``` gives you a column you can add content to, like paragraphs, images, embed maps etc
- **image_bg** ```<section class="image_bg">``` gives you full width/height section that you can apply background image* or background colour to

*To apply the background image or colour, you need to add an additional class name where you can specify the image's path or colour code in the CSS (see below).

### Content sections

When you want a section that you can just add content to and it will display in a column, use:

```
<section class="content">
  //Your content
</section>
```

This is straight forward - just give a section the class name **content** and you'll get this kind of thing:

![Screengrab of a content section](https://github.com/SheffieldJournalism/Longfrom-template/raw/master/ReadmeFiles/dot-content.png)

### Big heading sections with full width/height background images

Adding the **image_bg** class to a section makes it go full width/height.

```
<section class="image_bg">

</section>
```
![full height and width](https://github.com/SheffieldJournalism/Longfrom-template/raw/master/ReadmeFiles/100vh.png)

To specify a background image, an additional class name is required. If I want to for e.g. use an image of a pier, I might want to add the class name "pier" to the section:

```
<section class="pier image_bg">

</section>
```
This means I can add a new style **in style.css** that points to my image of the pier:

```
.pier {
  background: url(images/luc-sur-mer-pier.jpg);
  background-size: cover;
  background-attachment: fixed;
}
```
![background image](https://github.com/SheffieldJournalism/Longfrom-template/raw/master/ReadmeFiles/bg-image.png)

You can then put any content inside this section, but I recommend using a **header** element with at least a h1 and/or h2 in there:
```
<section class="pier image_bg">
  <header>
    <h1>A basic template</h1>
    <h2>For longform or immersive stories</h2>
    <span>Story by <a href="http://twitter.com/hadders">Hadrian Cawthorne</a></span>
  </header>
</section>
```
![headings](https://github.com/SheffieldJournalism/Longfrom-template/raw/master/ReadmeFiles/headings.png)

But it doesn't need to be headings, it could be blockquote, or anything. This may require additional CSS.


### Big heading sections with full width/height and background colour

As well as headers with background images, you can have just a colour. Use the same class as for an image:

```
<section class="image_bg">

</section>
```
The **image_bg** class sets up the section's dimensions. The addition of your own class e.g. "bg_green" allows you to set it's colour:
```
<section class="image_bg my_green">

</section>
```
And in CSS, create a new style:
```
.my_green {
  background: #bada55;
}
```


### Image carousel
[Slick Carousel](http://kenwheeler.github.io/slick/) has been integrated. Simply create some HTML like:

```
<div class="carousel">
  <div> <img src="img/Slider/IMG_2712.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2927.JPG" alt="" /> </div>
  <div> <img src="img/Slider/IMG_2959.JPG" alt="" /> </div>
</div>

```
Noting the class name given e.g. **carousel**. Then initialise the carousel in index.js.

```
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });
});

```

The above initialises a carousel. If you want another one, just make a new div with a different class name e.g.

```
<div class="carousel_two">
  <div>... etc
```
Then initialise that one in index.js too:

```
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });

  $('.carousel_two').slick({
    dots: true
  });
});

```


### Wow animations
[Animate.css](http://daneden.github.io/animate.css/) and [Wow.js](http://mynameismatthieu.com/WOW/) are integrated.

This allows you to animate any element when it is scrolled to.

To initialise an animation when scrolled to, add the class "wow" and any of the classes listed on animate.css website to the element:
```
<header class="wow fadeInUpBig">

</header>
```
