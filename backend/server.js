import express from 'express';

const app = express();

app.get('/',(req, res) => {
     res.send('server is ready');
});


// get a list of five jokes
app.get('/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content: "this is another joke"
        },
        {
            id: 1,
            title: "A third joke",
            content: "this is a third joke"
        },
        {
            id: 1,
            title: "A fourth joke",
            content: "this is a fourth joke"
        },
        {
            id: 1,
            title: "A fifth joke",
            content: "this is a fifth joke"
        },
    ];

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});