const express = require('express');
const next = require('next');

const routes = require('./routes');

const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    server.get('/portfolio/:id', (req, res) => {
        const actualPage = '/portfolio';
        const queryParams = {
            id: req.params.id
        }
        app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.use(handle).listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
    process.exit(1);
});