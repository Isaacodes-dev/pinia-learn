<template>
  <div class="home">
    <div class="count">
      {{ counterStore.count }}
    </div>
    <div class="buttons">
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{ counterStore.evenOrOdd }}
    </div>
    <div>
      <h3>Edit Counter:</h3>
      <input type="number" v-model="counterStore.count">
    </div>
  </div>
</template>

<script setup>

import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

</script>

<style>
  .count{
    font-size: 60px;
    margin: 20px;
  }

  .buttons button{
    font-size: 40px;
    margin: 10px;
  }

</style>