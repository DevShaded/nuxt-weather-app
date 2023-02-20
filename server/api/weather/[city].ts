export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.context.params.city}&appid=${runtimeConfig.WEATHER_API_KEY}&units=metric`)
    const data: WeatherResponse = await res.json()
    return {data}
})
