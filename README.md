<p align="center">
  <a href="https://cdn.itwcreativeworks.com/assets/holiday-butler/images/logo/holiday-butler-brandmark-black-x.svg">
    <img src="https://cdn.itwcreativeworks.com/assets/holiday-butler/images/logo/holiday-butler-brandmark-black-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/itw-creative-works/holiday-butler.svg">
  <br>
  <img src="https://img.shields.io/librariesio/release/npm/holiday-butler.svg">
  <img src="https://img.shields.io/bundlephobia/min/holiday-butler.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/itw-creative-works/holiday-butler.svg">
  <img src="https://img.shields.io/npm/dm/holiday-butler.svg">
  <img src="https://img.shields.io/node/v/holiday-butler.svg">
  <img src="https://img.shields.io/website/https/https://itwcreativeworks.com.svg">
  <img src="https://img.shields.io/github/license/itw-creative-works/holiday-butler.svg">
  <img src="https://img.shields.io/github/contributors/itw-creative-works/holiday-butler.svg">
  <img src="https://img.shields.io/github/last-commit/itw-creative-works/holiday-butler.svg">
  <br>
  <br>
  <a href="https://https://itwcreativeworks.com">Site</a> | <a href="https://www.npmjs.com/package/holiday-butler">NPM Module</a> | <a href="https://github.com/itw-creative-works/holiday-butler">GitHub Repo</a>
  <br>
  <br>
  <strong>holiday-butler</strong> is the official npm module of <a href="https://https://itwcreativeworks.com">Holiday Butler</a>, a free app for getting the dates of holidays for any year in any country.
</p>

## Holiday Butler Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## Features
* Get all holidays for any year
* Works in any country

### Getting an API key
You can use so much of `holiday-butler` for free, but if you want to do some advanced stuff, you'll need an API key. You can get one by [signing up for a Holiday Butler account](https://https://itwcreativeworks.com/authentication/signup).

## Install Holiday Butler
### Use the API
```js
fetch('https://cdn.jsdelivr.net/npm/holiday-butler@latest/dist/holiday/US/2050.json')
.then(res => {
  if (res.status >= 200 && res.status < 300) {
    res.json()
    .then(function (holidays) {
      console.log('Holidays', holidays)
    })
  }
})
```
<!-- ### Install via npm
Install with npm if you plan to use `holiday-butler` in a Node project or in the browser.
```shell
npm install holiday-butler
``` -->

<!-- ```js
const holiday-butler = new (require('holiday-butler'))({
  // Not required, but having one removes limits (get your key at https://https://itwcreativeworks.com).
  apiKey: 'api_test_key'
});
```

### Install via CDN
Install with CDN if you plan to use Holiday Butler only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/holiday-butler@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var holiday-butler = new Holiday Butler({
    // Not required, but having one removes limits (get your key at https://https://itwcreativeworks.com).
    apiKey: 'api_test_Key'
  });
</script>
``` -->

<!-- ### Use without installation
You can use `holiday-butler` in a variety of ways that require no installation, such as `curl` in terminal/shell. See the **Use without installation** section below.

## Using Holiday Butler
After you have followed the install step, you can start using `holiday-butler` to create custom text snippets that you can access on all of your devices

For a more in-depth documentation of this library and the Holiday Butler service, please visit the official Holiday Butler website.

## Use without installation
### Use Holiday Butler with `curl`
```shell
# Standard
curl -X POST https://api.https://itwcreativeworks.com
```

## What Can Holiday Butler do?
Holiday Butler is a free text snippet manager that lets you [create custom text snippets](https://https://itwcreativeworks.com) that you can access on all of your devices!

## Final Words
If you are still having difficulty, we would love for you to post
a question to [the Holiday Butler issues page](https://github.com/itw-creative-works/holiday-butler/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## Projects Using this Library
* coming soon!

Ask us to have your project listed! :) -->
