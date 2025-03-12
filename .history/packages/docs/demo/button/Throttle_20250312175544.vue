<script setup>
function handleBtnClick() {
  console.log("btn click");
}
</script>

<template>
  <p>
    <yis-button @click="handleBtnClick"> with throttle</yis-button>
    <yis-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</yis-button
    >
  </p>
</template>