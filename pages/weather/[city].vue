<script lang="ts" setup>
const router = useRoute()
const {data: weather, pending, error} = await useLazyFetch<WeatherResponse>('/api/weather/' + router.params.city)
</script>

<template>
  <div>
    <div v-if="pending">
      <Loading />
    </div>
    <div v-else-if="error">
      <h1>Error: {{ error.message }}</h1>
    </div>
    <div v-else>
      <div v-if="weather.data.cod ===  '404'">
        <NotFound />
      </div>
      <div v-else>
        <Weather :weather="weather.data"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
