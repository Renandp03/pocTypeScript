import postServices from "../services/postServices.js";
var posts = [
    {
        id: 1,
        owner: "renan",
        text: "esse dia foi loko",
        likes: 3
    },
    {
        id: 2,
        owner: "renan",
        text: "Comida saudável",
        likes: 0
    },
    {
        id: 3,
        owner: "lukas",
        likes: 1
    }
];
function list(req, res) {
    try {
        var timeline = postServices.getTimeline();
        return res.send(timeline);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
function post(req, res) {
    var _a = req.body, owner = _a.owner, text = _a.text;
    return res.status(201).send({ owner: owner, text: text });
}
export default {
    list: list,
    post: post
};
// {
//     id:4,
//     owner:"matheus",
//     text:"só quero um amor...",
//     likes:1
// }
