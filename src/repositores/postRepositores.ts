import db from "../config/database.js";

async function timeline(){
    return db.query(
        `
        SELECT * FROM posts
        `
    )
}

async function post(owner:string,text:string){

    return await db.query(
        `
        INSERT INTO posts (owner,text)
        VALUES ($1,$2)
        `,
        [owner,text])
}

async function update(id:number,text:string){

    return await db.query(
        `
        UPDATE posts SET text = $1
        WHERE id = $2
        `,
        [text,id])
}

async function deleteById(id:number){

    return await db.query(
        `
            DELETE FROM posts WHERE id = $1
        `,
        [id]
    )
}

export default {
    timeline,
    post,
    update,
    deleteById
}