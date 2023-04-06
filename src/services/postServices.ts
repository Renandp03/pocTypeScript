import postRepositores from "../repositores/postRepositores.js"

async function getTimeline(){

    const {rows : timeline} = await postRepositores.timeline();

    return timeline;
    
}

async function newPost({owner, text}:{owner:string,text:string}){

    await postRepositores.post(owner,text)
}

async function update({id, text}:{id:number,text:string}){

    await postRepositores.update(id,text)
    
}

async function deletePost(id:number){

    await postRepositores.deleteById(id)
    
}

export default {
    getTimeline,
    newPost,
    update,
    deletePost
}