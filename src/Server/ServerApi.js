// Weather Api

 async function GetData(){

     const Data = await fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=tehran&days=7", {
         "method": "GET",
         "headers": {
             "x-rapidapi-key": "269926aecemsh263311c0955020ep18fd21jsnd518d7a7071a",
             "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
         }
     })
     return await Data.json()

}

export default GetData