<script lang="ts" setup>
import { ErMessage } from "salmon-element";

const openCenter = () => {
  ErMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <yis-button plain @click="openCenter">Centered text</yis-button>
</template>
