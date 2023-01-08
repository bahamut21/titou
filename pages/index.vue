<template>
  <div>
    <h1>coucouc {{ count }}</h1>
    <p v-if="pending">'>wait please ...</p>
    <p v-else>{{ currentPokemon.name }}</p>
    <button @click="nextPokemon">+</button>
    <button @click="previousPokemon">-</button>
  </div>
</template>

<script setup>
const { data: count } = await useAsyncData("count", () => $fetch("/api/count"));
const currentId = ref(1);
const url = () => `https://pokeapi.co/api/v2/pokemon/${currentId.value}`;
const { pending, data: currentPokemon } = useLazyFetch(url, {
  pick: ["name", "sprites"],
});
const nextPokemon = async () => {
  currentId.value++;
};
const previousPokemon = async () => {
  if (currentId.value > 1) {
    currentId.value--;
  }
};
</script>
