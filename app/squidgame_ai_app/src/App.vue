<template>
  <div class="wrapper-page">
    <div class="block-circle elipse-1"></div>
    <div class="block-circle elipse-2"></div>
    <div class="block-circle elipse-3"></div>
    <div class="block-circle elipse-4"></div>
    <div class="wrapper-page-header-and-content">
      <LayoutHeader/>
      <div class="wrapper-page-content">
        <view-livefeed v-show="useStoreCookies().cookie['component'] === Components.LIVE"></view-livefeed>
        <view-generate v-show="useStoreCookies().cookie['component'] === Components.GENERATE"></view-generate>
        <view-getpro v-show="useStoreCookies().cookie['component'] === Components.GETPRO"></view-getpro>
        <view-login v-if="useStoreCookies().cookie['component'] === Components.LOGIN"></view-login>
        <view-signup v-if="useStoreCookies().cookie['component'] === Components.SIGNUP"></view-signup>
      </div>
    </div>
    <layout-footer/>
  </div>
</template>

<script setup lang='ts'>
// CORE
import {onMounted, ref} from "vue";
// ENUMS
import {Components} from "@/enums/Components";
// COOKIES
import {useStoreCookies} from "@/stores/useStoreCookies";
// LAYOUTS
import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
import LayoutFooter from '@/components/layouts/LayoutFooter.vue'
// VIEWS
import ViewLivefeed from "@/views/ViewLivefeed.vue";
import ViewGenerate from "@/views/ViewGenerate.vue";
import ViewGetpro from "@/views/ViewGetpro.vue";
import ViewLogin from "@/views/ViewLogin.vue";
import ViewSignup from "@/views/ViewSignup.vue";


onMounted(() => {
  console.log('DOCUMENT COOKIE: ', document.cookie)
  useStoreCookies().getComponent('component');
  if (useStoreCookies().cookie['component'] === undefined) {
    useStoreCookies().setComponent(Components.LIVE);
    useStoreCookies().getComponent('component');
  }
})
</script>
