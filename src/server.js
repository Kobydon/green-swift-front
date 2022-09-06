const express = require('express');

const app = express();

app.use(express.static('./dist/ng-pi-admin'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/ng-pi-admin/' }),
);

app.listen(process.env.PORT || 8080);