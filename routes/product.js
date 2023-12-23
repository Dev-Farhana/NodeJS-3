import express  from "express";
import {PRODUCTS} from "../constant/index.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send({Products: PRODUCTS})
})

export default router;