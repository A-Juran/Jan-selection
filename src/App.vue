<template>
  <div class="box">
    <h1>{{ str }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const str: string = ref('I love You!')
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  // background: black;
  h1: {
    color: rgb(255, 22, 22);
  }
}
</style>
