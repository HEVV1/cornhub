<template>
  <footer class="block-footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__nav-links">
          <a href="#" class="wrapper-link slide-up-on-hover">
            <img src="@/assets/icons/ic_footer_tg.svg" alt="">
          </a>
          <a href="#" class="wrapper-link slide-up-on-hover">
            <img src="@/assets/icons/ic_footer_x.svg" alt="">
          </a>
          <a href="#" class="wrapper-link slide-up-on-hover">
            <img src="@/assets/icons/ic_footer_ds.svg" alt="">
          </a>
        </div>
        <div class="footer__copyrights">
          <span>{{ currentYear }} Hubjourney.ai All Rights Reserved</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">

import {ref} from "vue";

const currentYear = ref(new Date().getFullYear());

</script>