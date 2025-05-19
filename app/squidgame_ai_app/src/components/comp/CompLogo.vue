<template>
  <div class="block-logo">
    <a :href="props.link">
      <div class="logo__holder--wrapper">
        <img src="@/assets/images/logo_squid_game_nav.svg" alt="">
      </div>
    </a>
  </div>
</template>

<script setup>


const props = defineProps({
  link: {
    type: String,
    default: ''
  }
});


</script>