<script lang="ts" setup>
defineProps<{
  weather: WeatherResponse
}>()

function formatTime(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <h2 class="font-bold text-2xl mb-2">{{ weather.name }}</h2>
        <p class="text-gray-700">{{ weather.weather[0].description }}</p>
      </div>
      <div class="flex items-center">
        <img :src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'"
             :alt="weather.weather[0].description" class="w-16 h-16 mr-4">
        <div>
          <p class="font-bold text-3xl mb-2">{{ weather.main.temp }} &#8451;</p>
          <p>Feels like {{ weather.main.feels_like }} &#8451;</p>
          <p>Humidity: {{ weather.main.humidity }}%</p>
          <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
          <p>Sunrise: {{ formatTime(weather.sys.sunrise) }}</p>
          <p>Sunset: {{ formatTime(weather.sys.sunset) }}</p>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <NuxtLink to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
