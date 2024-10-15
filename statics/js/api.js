async function Api() {
    const response_Petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&hourly=temperature_2m')
    const response_Astana = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.0222&longitude=71.4669&hourly=temperature_2m')
    const response_Tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&hourly=temperature_2m')
    const response_NY = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m')
    const response_LA = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&hourly=temperature_2m')
    
    const data_Petro = await response_Petro.json()
    const data_Astana = await response_Astana.json()
    const data_Tucson = await response_Tucson.json()
    const data_NY = await response_NY.json()
    const data_LA = await response_LA.json()

    console.log(data_Petro, data_Astana, data_Tucson, data_NY,data_LA)

    return [data_Petro, data_Astana, data_Tucson, data_NY,data_LA]
}

async function output() {
    try {
        let out = await Api()
        Petro.textContent = `Air temperature: ${out[0].hourly.temperature_2m[0]} \u00B0C`
        Astana.textContent = `Air temperature: ${out[1].hourly.temperature_2m[0]} \u00B0C`
        Tucson.textContent = `Air temperature: ${out[2].hourly.temperature_2m[0]} \u00B0C`
        NY.textContent = `Air temperature: ${out[3].hourly.temperature_2m[0]} \u00B0C`
        LA.textContent = `Air temperature: ${out[4].hourly.temperature_2m[0]} \u00B0C`
    }
    catch(error) {
        console.log('Error:', error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()

