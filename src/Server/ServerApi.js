// Weather Api

async function GetData(City){

    const Data = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${City}&days=7`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "269926aecemsh263311c0955020ep18fd21jsnd518d7a7071a",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
    })

    if (Data.status !== 400){
        return await Data.json()
    }
    if(Data.status === 400) {
        return await Data.status
    }

}

export default GetData