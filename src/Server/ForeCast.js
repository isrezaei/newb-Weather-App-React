async function ForeCast(City){

    const ForeCast = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${City.lat}&lon=${City.lon}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "269926aecemsh263311c0955020ep18fd21jsnd518d7a7071a",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    })

    return await ForeCast.json()

}

export default ForeCast