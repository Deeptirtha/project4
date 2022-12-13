
const express=require("express")
const router=express.Router()
const {creatUrl,geturl}= require("./controller/controller")

router.post("/url/shorten",creatUrl)

router.get("/:urlCode",geturl)

router.all("/*", function (req, res) {
    res.status(404).send({status: false,msg: "Wrong api please try different"})})

module.exports= router