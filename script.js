const express = require('express')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let movies = [{
    id: '1',
    title: 'SpiderMan',
    director: 'JS',
    releaseDate: '2022-12-12',
}, {
    id: '2',
    title: 'IronMan',
    director: 'Mohan',
    releaseDate: '2012-12-12',
},
];

app.get('/movie',(req,res)=>{
    res.json(movies)
});

app.get('/movie/:id',(req,res)=>{
    const id = req.params.id;
    for (let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return        
        }
    }
    res.status(404).send('Movie not found')
});

app.delete('/movie/:id',(req,res)=>{
    const id = req.params.id;
    movies = movies.filter(movie=>{
        if(movie.id !== id){
            return true
        }
        return false;
    })
    res.send("Movie is Deleted");
});

app.post('/movie',(req,res)=>{
    const movie = req.body;
    console.log(movie);
    movies.push(movie);
    res.send("Movie is Added");
});
app.listen(port, ()=>console.log('listening on port '))
