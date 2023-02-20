<script lang="ts" setup>
const router = useRouter()

const cityName = ref('')

function getWeather() {
  router.push(`/weather/${cityName.value}`)
}
</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center h-screen">
      <div class="text-center text-4xl mb-6">Weather App created with Nuxt 3 & TailwindCSS</div>
      <form @submit.prevent="getWeather" class="bg-white p-6 rounded-lg shadow-md">
        <label for="city" class="block font-medium text-gray-700 mb-2">Enter City Name:</label>
        <input id="city" v-model="cityName" type="text" required
               class="border border-gray-300 p-2 rounded-lg mb-4 w-full"/>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">Get
          Weather
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
