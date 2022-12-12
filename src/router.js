
const express=require("express")
const router=express.Router()
const {creatUrl,geturl}= require("./controller/controller")

router.post("/url/shorten",creatUrl)

router.get("/:urlCode",geturl)

module.exports= router