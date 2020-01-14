const path = require('path');
const express = require('express');
const app = new express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.allowedNodeEnvironmentFlags.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
console.log('server is up')
});