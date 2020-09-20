import express from 'express';
import data from '../data/data';

const app=express();

data();
app.listen(3000,()=>{
    console.log('server is up');
    
});