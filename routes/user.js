import express  from "express";

const router = express.Router();

const users = [
    {
        id: 1,name: "Ab", email: "abcd@mail.com"
    },
    {
        id:2 ,name: "Oana", email: "Oan@mail.com"
    }
]


router.get("/", (req,res) => {
    res.status(200).send({users: users})
})



export default router;