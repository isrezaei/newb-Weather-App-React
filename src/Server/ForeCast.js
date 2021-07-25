async function ForeCast(City){

    const ForeCast = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${City.lat}&lon=${City.lon}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b8227d29d9mshe7a875bea2f18a4p17312cjsnb03b9b259193",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    })

    return await ForeCast.json()

}

export default ForeCast


//${City.lon}
//${City.lat}
// `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${City.lat}&lon=${City.lon}`
