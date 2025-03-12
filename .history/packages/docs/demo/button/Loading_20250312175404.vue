<template>
  <div>
    <yis-button type="primary" loading>Loading</yis-button>
    <yis-button type="primary" loading-icon="circle-notch" loading
      >Loading</yis-button
    >
    <yis-button type="primary" loading>
      <template #loading>
        <yis-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </yis-button>
  </div>
</template>