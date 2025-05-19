<template>
  <div class="wrapper-page">
    <div class="block-circle elipse-1"></div>
    <div class="block-circle elipse-2"></div>
    <div class="block-circle elipse-3"></div>
    <div class="block-circle elipse-4"></div>
    <div class="wrapper-page-header-and-content">
      <LayoutHeader/>
      <div class="wrapper-page-content mb-60">
        <section class="block-main">
          <div class="container">
            <div class="main__wrapper">
              <div class="main__left">
                <div class="main__left--logo">
                  <div class="wrapper-image">
                    <img src="@/assets/images/logo_squid_game_content.svg" alt="">
                  </div>
                  <div class="wrapper-text t-center mt-20 pr-10 pl-10 text-abt-generate">
                    <span class="styled-as-26-400">WE GENERATE YOUR DREAM</span>
                  </div>
                  <div class="wrapper-button t-center mt-30">
                    <CompButton :size="'xl'" :visible="'visible-xl'"/>
                  </div>
                  <div class="wrapper-text t-center text-abt-author"><span
                    class="styled-as-10-400">Powered by Solana</span></div>
                </div>
                <div class="main__left--steps">
                  <div class="wrapper-image">
                    <img src="@/assets/images/image_steps.svg" alt="">
                  </div>
                </div>
              </div>
              <div class="wrapper-text text-decorative d-none-md">
                <span class="styled-as-150-700">GENERATE</span>
              </div>
              <div class="wrapper-text text-decorative d-none d-block-md">
                <span class="styled-as-150-700">SEXY</span>
              </div>
              <div class="main__right">
                <div class="wrapper-image image-ag1 animated" :class="[isItInViewPort[0] ? 'show-in-view-port' : '']">
                  <img src="@/assets/images/image_ag_1.png" alt="">
                </div>
                <div class="wrapper-image image-ag2 animated" :class="[isItInViewPort[1] ? 'show-in-view-port' : '']">
                  <img src="@/assets/images/image_ag_2.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="block-area d-none-md">
          <div class="container">
            <div class="area__wrapper">
              <div class="wrapper-text t-center mb-30">
                <span class="styled-as-26-400">INTRODUCING</span>
              </div>
              <div class="wrapper-image">
                <img src="@/assets/images/logo_squid_game_content.svg" alt="">
              </div>
              <div class="wrapper-text t-center mt-30">
                <span class="styled-as-10-400">Powered by Solana</span>
              </div>
              <div class="wrapper-text text-decorative">
                <span class="styled-as-180-700">SEXY</span>
              </div>
            </div>
          </div>
        </section>
        <section class="block-about mt-150">
          <div class="container">
            <div class="about__wrapper">
              <div class="about__wrapper-row--1">
                <div class="block-area">
                  <div class="area__wrapper">
                    <span class="styled-as-22-200">HUBJourney is hubjourney.ai native token which grants you a unique opportunity to become a stakeholder redefining investor engagement, thanks to the remarkable capabilities of Blockchain.</span>
                  </div>
                </div>
              </div>
              <div class="wrapper-text d-none d-block-md t-center">
                <span class="styled-as-180-700">GENERATED</span>
              </div>
              <div class="about__wrapper-row--2 mt-120">
                <div class="about__wrapper-subrow">
                  <div class="block-area">
                    <div class="area__wrapper">
                      <div class="wrapper-image animated" :class="[isItInViewPort[2] ? 'show-in-view-port' : '']">
                        <img src="@/assets/images/image_ag_3.png" alt="">
                      </div>
                      <div class="about__line"></div>
                      <div class="wrapper-text">
                        <span class="styled-as-22-200">hubjourney.ai is an increasingly popular NSFW AI image generator with a growing community.</span>
                      </div>
                      <div class="wrapper-text mt-20">
                  <span
                    class="styled-as-22-200">At Hubjourney.ai you can satisfy your desires with a click of a button.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="block-infographics">
          <div class="container">
            <div class="infographics__wrapper">
              <div class="infographics__wrapper-el animated" :class="[isItInViewPort[3] ? 'show-in-view-port' : '']">
                <comp-infographic
                  :numbers="'20K'"
                  :status="'REGISTERED'"
                  :entity="'USERS'"
                  :icon="'ic_user.svg'"
                  :classID="'info-1'"
                />
              </div>
              <div class="infographics__wrapper-el animated" :class="[isItInViewPort[4] ? 'show-in-view-port' : '']">
                <comp-infographic
                  :numbers="'100K'"
                  :status="'GENERATED'"
                  :entity="'IMAGES'"
                  :icon="'ic_img.svg'"
                  :classID="'info-2'"
                />
              </div>
              <div class="infographics__wrapper-el animated" :class="[isItInViewPort[5] ? 'show-in-view-port' : '']">
                <comp-infographic
                  :numbers="'40K'"
                  :status="'MONTHLY'"
                  :entity="'VISITORS'"
                  :icon="'ic_graph.svg'"
                  :classID="'info-3'"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="block-purpose mt-120">
          <div class="container">
            <div class="purpose__wrapper">
              <div class="wrapper-text head-text t-center">
                <span class="styled-as-26-400 d-none-md">EXPLORE hubjourney.ai </span>
                <span class="styled-as-20-200 d-none d-block-md">EXPLORE hubjourney.ai </span>
              </div>
              <div class="purpose__holder">
                <div class="block-area">
                  <div class="area__wrapper">
                    <div class="wrapper-text">
                      <span class="styled-as-20-200">HUBJourney aims to create a sustainable and prosperous environment for its holders, while directly funding the development and operation of hubjourney.ai.The token leverages various strategies to enhance liquidity, reduce supply, incentivize holding, and ensure ongoing support for hubjourney.ai. The HUBJourney token is built on the principles of stability, growth, and community engagement.</span>
                    </div>
                  </div>
                </div>
                <div class="wrapper-image animated" :class="[isItInViewPort[6] ? 'show-in-view-port' : '']">
                  <img src="@/assets/images/image_ag_4.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="block-stats mt-120">
          <div class="container">
            <div class="stats__wrapper">
              <div class="stats__textbar">
                <span class="styled-as-65-300"> <span class="styled-as-65-800">11M</span> in <span
                  class="styled-as-65-800">HUB</span> Journey </span>
              </div>
              <div class="stats__wrapper-el animated" :class="[isItInViewPort[7] ? 'show-in-view-port' : '']">
                <div class="stats__el">
                  <comp-statistics
                    :title="'LIQUIDITY'"
                    :number="'94%'"
                  />
                </div>
                <div class="stats__el">
                  <comp-statistics
                    :title="'marketing'"
                    :number="'2%'"/>
                </div>
                <div class="stats__el">
                  <comp-statistics
                    :title="'TREASURY'"
                    :number="'2%'"/>
                </div>
                <div class="stats__el">
                  <comp-statistics
                    :title="'AIRDROP'"
                    :number="'2%'"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <layout-footer/>
  </div>
</template>

<script setup lang='ts'>
// LIBRARIES
import {onBeforeUnmount, onMounted, reactive} from 'vue'

// LAYOUTS
import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
import LayoutFooter from '@/components/layouts/LayoutFooter.vue'

// COMPONENTS
import CompButton from '@/components/comp/CompButton.vue'
import CompInfographic from '@/components/comp/CompInfographic.vue'
import CompStatistics from '@/components/comp/CompStatistics.vue'

// UTILITIES
import {useAnimateOnShow} from '@/utils/useAnimateOnShow'

const isItInViewPort: boolean[] = reactive([])

// COMPOSITION API FUNCTIONS
const {animateOnShow} = useAnimateOnShow(isItInViewPort)


const trackScroll = () => {
  animateOnShow()
}

onMounted(() => {
  animateOnShow()
  window.addEventListener('scroll', trackScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', trackScroll)
})


</script>
