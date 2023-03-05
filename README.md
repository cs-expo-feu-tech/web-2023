# Hello Web 2023!

## Instructions for Developers - very important!

Make sure you have node installed! If you don't, you can download node [here](https://nodejs.org/en/download/).

### Setup

To setup dependencies, make sure you are on the same directory (web-2023). On a terminal window, type in:

```bash
npm install
```

This installs the Astro command line tools and other dependencies to run and test the application locally.

### Development

Each time you'll be developing this application, start the web server first. You can type in:

```bash
npm run dev
```

...to start the server and give you access to the website (in [http://localhost:3000](http://localhost:3000)).

## WHAT ARE .ASTRO FILES HELP!

Calm down! These are files that host the `<html>` markup for the website. You really don't need to worry too much, aside from this change:

---

At the very top of the file, you'll see two `---`s. Inside are the dependencies that allow the modularization of the pages.

For example, on the file `test.astro`, you'll see this:

```js
---
import BaseLayout from '../layouts/BaseLayout.astro'
---
```

What that does is it imports the base layout from "/src/layouts/BaseLayout.astro" that contains the `<head>` tags for bootstrap imports, meta tags, and more, as well as the custom header and footer elements (indicated with the prefix CSE...):

```js
---
import CSEHeader from '../components/CSEHeader.astro'
import CSEFooter from '../components/CSEFooter.astro'
...
---
```

```html
<head>
    ...
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" ... />
    ...
</head>
<body>
    <CSEHeader />
    ...
    <CSEFooter />
</body>
```

---

You may use the `test.astro` file as a template:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Test page">
    <div class="container">
        <p class="py-5">Hello World!</p>
    </div>
</BaseLayout>
```

Think of `<BaseLayout>` as the `<html> <head>...</head> <body>{content}</body> </html>` in this environment - treat it as such!