const express = require('express');
const app = express();
console.log(process.env.PORT);
const port = process.env.PORT ? process.env.PORT : 3003;

app.get('/', (rew, res) => {
    res.send('Hello world');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}`));
