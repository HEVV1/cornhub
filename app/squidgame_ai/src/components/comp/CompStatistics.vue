<template>
  <div class="block-statistics">
    <div class="wrapper-text text">
      <span class="styled-as-26-400">{{ props.title }}</span>
    </div>
    <div class="wrapper-text number">
      <span class="styled-as-60-800">{{ props.number }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  number: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>