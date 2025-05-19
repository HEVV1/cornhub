<template>
  <header class="block-header">
    <div class="container">
      <div class="header__wrapper">
        <CompLogo/>
        <div class="header__navbar-components">
          <CompButton :size="'mb'" :visible="'visible-md'"/>
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
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/*COMPONENTS*/
import CompLogo from "@/components/comp/CompLogo.vue";
import CompButton from "@/components/comp/CompButton.vue";
</script>