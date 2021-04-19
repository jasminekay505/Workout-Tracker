const router = require("express").Router();
const path = require('path');

//Home page 
router.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Exercise page
router.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

//Stats page
router.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});