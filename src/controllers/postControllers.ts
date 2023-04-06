import express, { Request, Response } from "express";
import postServices from "../services/postServices.js";


function list(req:Request, res:Response){

   try {

    const timeline = postServices.getTimeline();
    return res.send(timeline);

   } catch (error) {
    res.status(500).send(error.message)
   }
}

async function post(req:Request, res:Response){

    try {
        const { owner, text }:{owner:string,text:string} = req.body; 

        await postServices.newPost({owner,text});
        return res.status(201).send({owner, text});

    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function update(req:Request, res:Response){
    try {

        const {id, text}:{id:number, text:string} = req.body;

        await postServices.update({id,text});

        res.status(201).send("post alterado com sucesso");
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function deletePost(req:Request, res:Response){
    try {

        const {id}:{id:number} = req.body;

        await postServices.deletePost(id)
        res.status(204).send("post deletado com sucesso");
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}




export default {
    list,
    post,
    update,
    deletePost
}

