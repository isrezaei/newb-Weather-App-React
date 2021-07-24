async function ForeCast(City){

    const ForeCast = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${City.lat}&lon=${City.lon}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3cec8d8c46msha90ce5b12fd7ab4p168338jsn8fdd68f47d24",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    })

    return await ForeCast.json()

}

export default ForeCast