<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <yis-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <yis-button>top-start</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <yis-button>top</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <yis-button>top-end</yis-button>
      </yis-tooltip>
    </div>
    <div class="row">
      <yis-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <yis-button>left-start</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <yis-button>right-start</yis-button>
      </yis-tooltip>
    </div>
    <div class="row">
      <yis-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <yis-button class="mt-3 mb-3">left</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <yis-button>right</yis-button>
      </yis-tooltip>
    </div>
    <div class="row">
      <yis-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <yis-button>left-end</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <yis-button>right-end</yis-button>
      </yis-tooltip>
    </div>
    <div class="row center">
      <yis-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <yis-button>bottom-start</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <yis-button>bottom</yis-button>
      </yis-tooltip>
      <yis-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <yis-button>bottom-end</yis-button>
      </yis-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
