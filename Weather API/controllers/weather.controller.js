const axios=require("axios")
const {WEATHER_API_KEY}=process.env
const fetchWeather= async (req,res)=>{
    try{
        const {lat,long}=req.body
        const data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`)
        res.status(200).send(data.data)
    }catch (e) {
        res.status(500).send(e)
    }
}

module.exports={fetchWeather}