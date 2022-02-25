const express = require("express");
const Bundler = require("parcel-bundler");

const PORT = 3000;

const app = express();

const bundler = new Bundler("./static/index.html", { watch: true, cache: false });

app.use(bundler.middleware());

app.listen(PORT, function () {
  console.log(`listening on: http://localhost:${PORT}`);
});

// const express = require('express');
// const path = require('path');
// const serveStatic = require('serve-static');

// const app = express();
// app.use(serveStatic(path.join(__dirname, 'dist')));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function () {
//   console.log(`listening on: http://localhost:${PORT}`);
// });
