import axios from "axios";

const options = {
    //method: 'GET',
   // url: process.env.REACT_APP_RAPID_BASE_URL,
    params: {
    //   part: 'snippet',
    //   videoId: 'M7FIvfx5J10'
    maxResult:100
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  const options1 = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

 export const fetchDataFromApi = async(url)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_RAPID_BASE_URL}/${url}`,options1)
    return data
  }

