<template>
  <Button class="block-button" :class="props.size + ' ' + props.visible">
    <a href="http://localhost:5174/" class="button__wrapper">
      <div class="button__icon-holder">
        <img src="@/assets/icons/ic_play.svg" alt="">
      </div>
      <div class="wrapper-text--md">
        <span class="styled-as-14-400">LET'S GO</span>
      </div>
      <div class="wrapper-text--xl">
        <span class="styled-as-20-600">LET'S GO</span>
      </div>
    </a>
  </Button>
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
  size: {
    type: String,
    default: 'xl'
  },
  visible: {
    type: String,
    default: ''
  }
})

</script>