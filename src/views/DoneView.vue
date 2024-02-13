<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const legs = ref(false)
const chest = ref(false)
const back = ref(false)
const shoulders = ref(false)
const arms = ref(false)

const done = computed(() => {
  return legs.value && chest.value && back.value && shoulders.value && arms.value
})

const toggleLegs = () => {
  legs.value = !legs.value
  setValInLocalStorage('legs', legs.value)
}

const toggleChest = () => {
  chest.value = !chest.value
  setValInLocalStorage('chest', chest.value)
}

const toggleBack = () => {
  back.value = !back.value
  setValInLocalStorage('back', back.value)
}

const toggleShoulders = () => {
  shoulders.value = !shoulders.value
  setValInLocalStorage('shoulders', shoulders.value)
}

const toggleArms = () => {
  arms.value = !arms.value
  setValInLocalStorage('arms', arms.value)
}

const setValInLocalStorage = (key: string, value: boolean) => {
  if (value) {
    localStorage.setItem(key, getCurrentWeek().toString())
  } else {
    localStorage.removeItem(key)
  }
}

const getCurrentWeek = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
  const week1 = new Date(date.getFullYear(), 0, 4)
  return (
    1 +
    Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
  )
}

const isDoneToday = (weekDone: number) => {
  const week = getCurrentWeek()
  return weekDone === week
}

onMounted(() => {
  if (localStorage.getItem('legs')) {
    legs.value = isDoneToday(parseInt(localStorage.getItem('legs')!))
  }
  if (localStorage.getItem('chest')) {
    chest.value = isDoneToday(parseInt(localStorage.getItem('chest')!))
  }
  if (localStorage.getItem('back')) {
    back.value = isDoneToday(parseInt(localStorage.getItem('back')!))
  }
  if (localStorage.getItem('shoulders')) {
    shoulders.value = isDoneToday(parseInt(localStorage.getItem('shoulders')!))
  }
  if (localStorage.getItem('arms')) {
    arms.value = isDoneToday(parseInt(localStorage.getItem('arms')!))
  }
})
</script>

<template>
  <div class="container">
    <h1 class="text-center">Am I done with JIM this Week?</h1>
    <h2 class="text-center">{{ done ? 'Yes' : 'No' }}</h2>

    <div class="text-center">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="legs"
            :value="legs"
            :checked="legs"
            @change="toggleLegs"
          />

          <label class="form-check-label" for="legs">Legs</label>
        </div>
        <div class="col-3"></div>
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="chest"
            :value="chest"
            :checked="chest"
            @change="toggleChest"
          />
          <label class="form-check-label" for="chest">Chest</label>
        </div>
        <div class="col-3"></div>
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="back"
            :value="back"
            :checked="back"
            @change="toggleBack"
          />
          <label class="form-check-label" for="back">Back</label>
        </div>
        <div class="col-3"></div>
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="shoulders"
            :value="shoulders"
            :checked="shoulders"
            @change="toggleShoulders"
          />
          <label class="form-check-label" for="shoulders">Shoulders</label>
        </div>
        <div class="col-3"></div>
      </div>

      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="arms"
            :value="arms"
            :checked="arms"
            @change="toggleArms"
          />
          <label class="form-check-label" for="arms">Arms</label>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>
