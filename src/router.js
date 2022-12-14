const express=require("express")
const router=express.Router()
const {creatUrl,geturl}= require("./controller/controller")

//========================================================Create short url=======================================================================
router.post("/url/shorten",creatUrl)
//========================================================Get short url==========================================================================
router.get("/:urlCode",geturl)
//=======================================================Wrong api===============================================================================
router.all("/*", function (req, res) {
    res.status(404).send({status: false,msg: "Wrong api please try different"})})

module.exports= router