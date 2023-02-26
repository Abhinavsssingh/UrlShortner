const express = require("express")
const router = express.Router()
const{UrlShortner,getOne}=require("./controllers/shortner")

router.post('/url/shorten',UrlShortner)
router.get('/:urlCode',getOne)

module.exports =router
