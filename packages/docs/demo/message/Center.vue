<script lang="ts" setup>
import { YisMessage } from "salmon-element";

const openCenter = () => {
  YisMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <yis-button plain @click="openCenter">Centered text</yis-button>
</template>
