const express = require('express'); 
const router = express.Router()
var axios = require("axios").default;
const authToken = require('../../middleware/authToken')
const dotenv = require('dotenv')

dotenv.config()
const apiKey = process.env.API_KEY

// @route   GET route
// @desc    Return home page requested external api data
// @access  Private
router.get("/", async(req, res) =>{
  var homeData = {}; 
  let kanjiOptions = {
            method: 'GET',
            url: 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/',
            params: {grade: '1'},
            headers: {
              'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
              'x-rapidapi-key': apiKey
            }
    }; 

  const kanji =async() => axios.request(kanjiOptions).then(response =>{
    const kanjiAvailable = response.data.length
    const randomKanji = Math.floor((Math.random()*kanjiAvailable))  
    return homeData['kanji'] =  response.data[randomKanji].kanji.character
  }).then(async()=>{
    let char =  homeData['kanji']
    var encodedChar = encodeURI(char)
    
    var kanjiDetailOptions = {
    method: 'GET',
    url: `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${encodedChar}`,
    headers: {
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  };

    return axios.request(kanjiDetailOptions).then(response => homeData['kanjiDetails'] = response.data)
})

  let quoteOptions = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    },
    data: {key1: 'value', key2: 'value'}
  };

  const quote = async() => axios.request(quoteOptions).then(response =>{
    return homeData['quote'] = response.data
  })
  
  await Promise.all([kanji(), quote()]).then(()=>res.json(homeData))
})

module.exports = router; 