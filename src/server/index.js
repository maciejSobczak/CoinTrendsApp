const express = require('express');

const publicweb = process.env.PUBLICWEB || './dist/publicweb';
const app = express();

app.use(express.static(publicweb));
console.log(`serving${publicweb}`);
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.SERVER_PORT || 1337;
app.listen(port, () => console.log(`api running on port:${port}`));