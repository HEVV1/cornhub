<template>
  <header class="block-header">
    <div class="container">
      <div class="header__wrapper">
        <CompLogo :link="'squidgame.ai'"/>
        <CompMenuButton @clickMenu="clickMenuButton" :isMenuActive="isItActiveMenu[0]"/>
        <div class="header__navbar-components d-none-md">
          <nav class="header__navbar nb-links">
            <div class="header__navbar--links live" :class="[isItActive[0] ? 'active-nav-link' : '']"
                 @click="isItActiveToggler(0)">
              <button :class="[useStoreCookies().cookie['component'] === Components.LIVE  ? 'button-active' : '']"
                      @click="onClickLive">LIVE
              </button>
            </div>
            <div class="header__navbar--links generate" :class="[isItActive[1] ? 'active-nav-link' : '']"
                 @click="isItActiveToggler(1)">
              <button :class="[useStoreCookies().cookie['component'] === Components.GENERATE  ? 'button-active' : '']"
                      @click="onClickGenerate">GENERATE
              </button>
            </div>
            <div class="header__navbar--links pro" :class="[isItActive[2] ? 'active-nav-link' : '']"
                 @click="isItActiveToggler(2)">
              <button :class="[useStoreCookies().cookie['component'] === Components.GETPRO  ? 'button-active' : '']"
                      @click="onClickGetPro">GET PRO
              </button>
            </div>
            <div class="header__navbar--links login" :class="[isItActive[3] ? 'active-nav-link' : '']"
                 @click="isItActiveToggler(3)">
              <button :class="[useStoreCookies().cookie['component'] === Components.LOGIN  ? 'button-active' : '']"
                      @click="onClickLogin">LOG IN
              </button>
            </div>
            <div class="header__navbar--links login d-none" :class="[isItActive[8] ? 'active-nav-link' : '']"
                 @click="isItActiveToggler(8)">
              <button>LOG OUT</button>
            </div>
          </nav>
          <nav class="header__navbar nb-icons">
            <div class="header__navbar--icons slide-up-on-hover">
              <a href="#">
                <img src="@/assets/icons/ic_baseline_telegram.svg" alt="">
              </a>
            </div>
            <div class="header__navbar--icons slide-up-on-hover">
              <a href="#">
                <img src="@/assets/icons/ic_x.svg" alt="">
              </a>
            </div>
            <div class="header__navbar--icons slide-up-on-hover">
              <a href="">
                <img src="@/assets/icons/ic_discord.svg" alt="">
              </a>
            </div>
          </nav>
        </div>
        <div class="header__wrapper--mobile-menu" :class="[isItActiveMenu[0] ? 'activeMenu' : '']">
          <div class="header__navbar-components">
            <nav class="header__navbar nb-links">
              <div class="header__navbar--links live" :class="[isItActive[4] ? 'active-nav-link' : '']"
                   @click="isItActiveToggler(4)">
                <button :class="[useStoreCookies().cookie['component'] === Components.LIVE  ? 'button-active' : '']"
                        @click="onClickLive">LIVE
                </button>
              </div>
              <div class="header__navbar--links generate" :class="[isItActive[5] ? 'active-nav-link' : '']"
                   @click="isItActiveToggler(5)">
                <button :class="[useStoreCookies().cookie['component'] === Components.GENERATE  ? 'button-active' : '']"
                        @click="onClickGenerate">GENERATE
                </button>
              </div>
              <div class="header__navbar--links pro" :class="[isItActive[6] ? 'active-nav-link' : '']"
                   @click="isItActiveToggler(6)">
                <button :class="[useStoreCookies().cookie['component'] === Components.GETPRO  ? 'button-active' : '']"
                        @click="onClickGetPro">GET PRO
                </button>
              </div>
              <div class="header__navbar--links login" :class="[isItActive[7] ? 'active-nav-link' : '']"
                   @click="isItActiveToggler(7)">
                <button :class="[useStoreCookies().cookie['component'] === Components.LOGIN  ? 'button-active' : '']"
                        @click="onClickLogin">LOG IN
                </button>
              </div>
              <div class="header__navbar--links login d-none" :class="[isItActive[9] ? 'active-nav-link' : '']"
                   @click="isItActiveToggler(9)">
                <button>LOG OUT</button>
              </div>
            </nav>
            <nav class="header__navbar nb-icons mt-10">
              <div class="header__navbar--icons slide-up-on-hover">
                <a href="#">
                  <img src="@/assets/icons/ic_baseline_telegram.svg" alt="">
                </a>
              </div>
              <div class="header__navbar--icons slide-up-on-hover">
                <a href="#">
                  <img src="@/assets/icons/ic_x.svg" alt="">
                </a>
              </div>
              <div class="header__navbar--icons slide-up-on-hover">
                <a href="">
                  <img src="@/assets/icons/ic_discord.svg" alt="">
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/*VUE IMPORTS*/
import {onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
// ENUMS
import {Components} from "@/enums/Components";
/*COMPONENTS*/
import CompLogo from "@/components/comp/CompLogo.vue";
import CompMenuButton from '@/components/comp/CompMenuButton.vue'
import {useStoreCookies} from "@/stores/useStoreCookies";


const isItActive: boolean[] = reactive([false, false, false, false, false, false]);
const isItActiveMenu: boolean[] = reactive([false])


const isItActiveToggler = (props: number) => {
  if (!isItActive[props]) {
    isItActive[props] = !isItActive[props];
  }
  if (isItActive.indexOf(true) !== 1) {
    isItActiveMenu[0] = false;
  }
  setTimeout(() => {
    isItActive[props] = false;
  }, 200)
};

const clickMenuButton = () => {
  if (!isItActiveMenu[0]) {
    isItActiveMenu[0] = !isItActiveMenu[0]
  } else {
    isItActiveMenu[0] = !isItActiveMenu[0]
  }
}

const trackResize = () => {
  let viewPortWidth: number = window.innerWidth;
  if (viewPortWidth >= 768) {
    isItActiveMenu[0] = false;
  }
}

onMounted(() => {
  window.addEventListener("resize", trackResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", trackResize);
})

const onClickLive = () => {
  useStoreCookies().setComponent(Components.LIVE);
  useStoreCookies().getComponent('component');
}
const onClickGenerate = () => {
  useStoreCookies().setComponent(Components.GENERATE);
  useStoreCookies().getComponent('component');
}
const onClickGetPro = () => {
  useStoreCookies().setComponent(Components.GETPRO);
  useStoreCookies().getComponent('component');
}
const onClickLogin = () => {
  useStoreCookies().setComponent(Components.LOGIN);
  useStoreCookies().getComponent('component');
}

</script>
