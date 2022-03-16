const express = require('express'); 
const router = express.Router()
var axios = require("axios").default;
const authToken = require('../../middleware/authToken')
const dotenv = require('dotenv')

// @route   GET route
// @desc    Return home page requested external api data
// @access  Private
router.get("/", authToken, async(req, res) =>{
  //get Api key from environmental variables
  dotenv.config()
  const apiKey = process.env.API_KEY

  //get japaneseLevel from headers
  let japaneseLevel = req.header('japanese-level')

  //kanji api has two grades for its most difficult kanji, choose one randomly 
  if (japaneseLevel === "5") {
    let possibleGrades = ["5","6"]
    japaneseLevel = possibleGrades[Math.floor(Math.random()* possibleGrades.length)]
  }

  //Api config
  const kanjiBaseUrl = 'https://kanjialive-api.p.rapidapi.com/api/public/'
  const kanjiHeaders = {
    'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  } 

  const kanjiOptions = {
    method: 'GET',
    url:`${kanjiBaseUrl}search/advanced/`,
    params: {grade: japaneseLevel},
    headers: kanjiHeaders
  };

  const kanjiDetailOptions = {
    method: 'GET',
    url: `${kanjiBaseUrl}kanji/`,
    headers: kanjiHeaders
  };

  const quoteOptions = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    },
    data: {key1: 'value', key2: 'value'}
  };

  //Api Calls
  var homeData = {}; 
  
  const kanji = async() => axios.request(kanjiOptions)
  .then(response =>{
    const kanjiAvailable = response.data.length
    const randomKanji = Math.floor((Math.random()*kanjiAvailable))  
    return homeData['kanji'] =  response.data[randomKanji].kanji.character
  })
  .then(async() => {
    let char =  homeData['kanji']
    let encodedChar = encodeURI(char)
    kanjiDetailOptions['url'] = kanjiDetailOptions['url'] + encodedChar
    return axios.request(kanjiDetailOptions).then(response => homeData['kanjiDetails'] = response.data)
  })

  const quote = async() => axios.request(quoteOptions)
  .then(response => homeData['quote'] = response.data)
  
  await Promise.all([kanji(), quote()])
  .then(()=>res.json(homeData))
})

module.exports = router; 