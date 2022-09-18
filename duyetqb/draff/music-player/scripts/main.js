const url = "https://spotify23.p.rapidapi.com/albums/";



const response = fetch(url,{
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
  params: {ids: '3IBcauSj5M2A6lTeffJzdv'},
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'afaac77afamsh4be25626d1f7857p135574jsn84e04145161c',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
}).then((response)=>console.log("response",response))