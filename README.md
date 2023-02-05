<div align="center">
  <img src="https://raw.githubusercontent.com/apostrophecms/apostrophe/main/logo.svg" alt="ApostropheCMS logo" width="80" height="80">

  <h1>Apostrophe GraphQL Apollo Server</h1>
  <p>
    <a aria-label="Apostrophe logo" href="https://v3.docs.apostrophecms.org">
      <img src="https://img.shields.io/badge/MADE%20FOR%20Apostrophe%203-000000.svg?style=for-the-badge&logo=Apostrophe&labelColor=6516dd">
    </a>
    <a aria-label="Join the community on Discord" href="http://chat.apostrophecms.org">
      <img alt="" src="https://img.shields.io/discord/517772094482677790?color=5865f2&label=Join%20the%20Discord&logo=discord&logoColor=fff&labelColor=000&style=for-the-badge&logoWidth=20">
    </a>
    <a aria-label="License" href="https://github.com/apostrophecms/blog/blob/main/LICENSE.md">
      <img alt="" src="https://img.shields.io/static/v1?style=for-the-badge&labelColor=000000&label=License&message=MIT&color=3DA639">
    </a>
  </p>
</div>

This module bundle helps developers quickly setup a full GraphQL server.

## Installation

To install the module, use the command line to run this command in an Apostrophe project's root directory:

```
npm i --save https://github.com/RustLovers/apostrophe-graphql
```

## Usage

Configure the blog modules in the `app.js` file:

```javascript
require('apostrophe')({
  modules: {
    // The main server module
    'apostrophe-graphql': {},
  }
});
```

## Notes

### TypeDefs and Resolvers are generated dinamicaly

The TypeDefs and resolvers are created automaticatly every time the user reload the server.


## Work In Progress 

- We are developing the next full features
