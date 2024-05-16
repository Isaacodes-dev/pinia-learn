<template>
  <div class="about">
    <button @click="counterStore.increment">{{counterStore.count}}</button>
  </div>
</template>

<script setup>

import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

</script>