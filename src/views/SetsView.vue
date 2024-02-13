<script setup lang="ts">
import { onMounted, ref } from 'vue'

const setsDone = ref(0)

const addSet = () => {
  setsDone.value++
  localStorage.setItem('sets', setsDone.value.toString())
}

const removeSet = () => {
  if (setsDone.value > 0) {
    setsDone.value--
    localStorage.setItem('sets', setsDone.value.toString())
  }
}

const resetSets = () => {
  setsDone.value = 0
  localStorage.setItem('sets', setsDone.value.toString())
}

onMounted(() => {
  console.log('SetsView mounted')
  const sets = localStorage.getItem('sets')
  if (sets) {
    setsDone.value = parseInt(sets)
  }
})
</script>

<template>
  <div class="container">
    <h1 class="text-center">Sets done: {{ setsDone }}</h1>
    <div class="row">
      <div class="col-6 text-center my-2">
        <button class="btn btn-success w-100" @click="addSet"> + </button>
      </div>
      <div class="col-6 text-center my-2">
        <button class="btn btn-primary w-100" @click="removeSet"> - </button>
      </div>
      <div class="col-12 text-center">
        <button class="btn btn-danger w-100" @click="resetSets">reset</button>
      </div>
    </div>
  </div>
</template>
