
const express=require("express")
const router=express.Router()
const {creatUrl,geturl}= require("./controller/controller")

router.post("/url/shorten",creatUrl)

router.get("/GET/:urlCode",geturl)

module.exports= router