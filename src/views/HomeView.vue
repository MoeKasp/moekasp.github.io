<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="container">
      <h2 class="text-center">Moe's JIM tools</h2>
      <div class="row">
        <div class="col-12 text-center my-2">
          <RouterLink to="/yes" class="btn btn-outline-light">Should I go JIM today?</RouterLink>
        </div>
        <div class="col-12 text-center my-2">
          <RouterLink to="/reps" class="btn btn-outline-light">How many reps should I do?</RouterLink>
        </div>
        <div class="col-12 text-center my-2">
          <RouterLink to="/sets" class="btn btn-outline-light">How many sets have I done?</RouterLink>
        </div>
        <div class="col-12 text-center my-2">
          <RouterLink to="/done" class="btn btn-outline-light">Am I done with JIM this Week?</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
