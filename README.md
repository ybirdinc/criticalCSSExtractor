# Critical CSS Extractor

This script is generated to ectract Critical CSS from a URL in order to improve page load speed.

## What is Critical CSS

When a web page downloads, **not** all of the page is in the fold. For example we see the footer section only after we scroll down the page. But all the css codes download within the page. Sometimes it is a huge load.

Critical CSS is the part of the CSS codes for only the parts of the page which loads in the fold. You have to add Critical CSS in head section. Use it minified for best result.

Example:

```html
<head>
...
<style>@charset "UTF-8";.pui-card-badge,button,select{text-transform:none}.planeui-logo-1x:before,.planeui-logo-2x:before,.planeui-logo-3x:before,...</style>
...
</head>
```

## How to extract Critical CSS

With this script you can extract Critical CSS of the given URL and then save it in unminified and minified CSS files.

There two files to edit: **desktop.js** and **mobile.js**. In both files you have to add the URL to extract Critical CSS from and desired screen sizes. Then save and close the files and when you run the script, **mobile.js** saves all used css files in mobile folder, combines these files in **mobile.css** in root and finally minifies it. The same goes for **desktop.js** as it saves all the files in desktop folder, combines them in **desktop.css** in root and then minifies it.

## How to install

First of all Node.js is needed.

I used **Grunt**, so you have install Grunt and grunt-cli globally. Open command prompt in any folder and type:

    npm install ig grunt
    npm install -g grunt-cli

Then go to desired folder where you want to extract Critical CSS, download this repo and install packages:

    npm install

Edit **desktop.js** and **mobile.js** to change the URL and screen sizes. Then in CMD run:

    grunt

In a few seconds your files will be ready.

Feel free to edit the files as your needs, rename the files, folders etc.

**PS:** Do **not** forget to delete all downloaded files every each time you get your result.