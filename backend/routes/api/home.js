const express = require('express'); 
const router = express.Router()
var axios = require("axios").default;
const authToken = require('../../middleware/authToken')

// @route   GET route
// @desc    Return home page requested external api data
// @access  Private
router.get("/", authToken, (req, res) =>{
  var homeData = {}; 
  let kanjiOptions = {
            method: 'GET',
            url: 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/',
            params: {grade: '1'},
            headers: {
              'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
              'x-rapidapi-key': '8896c01f3fmsh83a89858737e40dp101a11jsn8e10a9d99780'
            }
    }; 

  const kanji =async() => axios.request(kanjiOptions).then(response =>{
    const kanjiAvailable = response.data.length
    const randomKanji = Math.floor((Math.random()*kanjiAvailable))  
    return homeData['kanji'] =  response.data[randomKanji]
  })

  let quoteOptions = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
      'x-rapidapi-key': '8896c01f3fmsh83a89858737e40dp101a11jsn8e10a9d99780'
    },
    data: {key1: 'value', key2: 'value'}
  };

  const quote = async() => axios.request(quoteOptions).then(response =>{
    return homeData['quote'] = response.data
  })
  
  Promise.all([kanji(), quote()]).then(()=>res.json(homeData))
})

module.exports = router; 