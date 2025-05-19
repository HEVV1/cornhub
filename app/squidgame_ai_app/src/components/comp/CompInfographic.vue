<template>
  <div :class="`block-infographic ${props.classID}` ">
    <div class="wrapper-image">
      <img :src="`src/assets/icons/${props.icon}`" alt="">
    </div>
    <div class="wrapper-text numbers">
      <span>{{ props.numbers }}</span>
    </div>
    <div class="wrapper-text status">
      <span>{{ props.status }}</span>
    </div>
    <div class="wrapper-text entity">
      <span>{{ props.entity }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  classID: {
    type: String,
    default: ''
  },
  numbers: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: ''
  },
  entity: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
})
</script>