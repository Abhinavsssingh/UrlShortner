const UrlModel = require("../model/urlModel")
const codeGenerate = require("shortid")
const ValidUrl = require("valid-url")
const urlModel = require("../model/urlModel")
const redis = require("redis")
const {promisify} = require("util")

const redisClient = redis.createClient(
    13190,
    "redis-13190.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    { no_ready_check: true }//dekho
  );
  redisClient.auth("gkiOIPkytPI3ADi14jHMSWkZEo2J5TDG", function (err) {
    if (err) throw err;
  });
  
  redisClient.on("connect", async function () {//kahe?? connect
    console.log("Connected to Redis..");
  });

const SETEX_ASYNC = promisify(redisClient.SETEX).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);




const UrlShortner = async(req,res) => {
try{
    let data = req.body
    const{longUrl} = data
    console.log(longUrl)
    if(!longUrl) return res.status(400).send({message:"provide Long url"})

    if(!ValidUrl.isUri(longUrl)) return res.status(400).send({message:"invalid url"})
    let uRl =  await UrlModel.findOne({longUrl:longUrl})
    if(uRl)  return res.status(400).send({message:"long url already has short url"})

    
     const urlCode = codeGenerate.generate()
     data.urlCode=urlCode
     data.shortUrl = `http://localhost:3000/${urlCode}`

     const tosend = await UrlModel.create(data)
     
    res.status(200).send({status:true,data:{longUrl:tosend.longUrl,shortUrl:tosend.shortUrl,urlCode:tosend.urlCode}})
}catch(err){
    res.status(500).send({message:err.message})
}

}

const getOne = async(req,res)=>{
try{
    const coDe = req.params.urlCode
    if(!coDe) return res.status(400).send({message:"invalid short url code "})
    let catchUrl = await GET_ASYNC(`${coDe}`)
    if(catchUrl){return res.status(302).redirect(catchUrl)}
    else{
        let lonGurl = await urlModel.findOne({urlCode:coDe})
    if(!lonGurl) return res.status(404).send({message:"short url not found try our post api to create one !!"})
    let logUrl = lonGurl.longUrl
    await SETEX_ASYNC(coDe,96000,logUrl) 
    res.status(302).redirect(logUrl)

    }
    
}catch(err){res.status(500).send({message:err.message})}
}

module.exports={UrlShortner,getOne}

console.log(5%6)
