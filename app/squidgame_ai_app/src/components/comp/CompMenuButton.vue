<template>
  <div class="block-menuButton d-none d-block-md" :class="[props.isMenuActive ? 'active' : '']" @click="menuClick">
    <div class="menuButton__line line-1"></div>
    <div class="menuButton__line line-2"></div>
    <div class="menuButton__line line-3"></div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['clickMenu'])
const menuClick = () => {
  emit('clickMenu');
}

const props = defineProps({
  isMenuActive: {
    type: Boolean,
    default: false
  }
})

</script>