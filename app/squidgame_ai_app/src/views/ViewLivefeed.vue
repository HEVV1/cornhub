<template>
  <div>
    <div v-if="!isItLoading" class="wrapper-for-loading">
      <section class="block-live d-none-md" :key="rowIndex - 1" v-for="rowIndex in ROWS_QUANTITY">
        <div class="container">
          <div class="live__wrapper">
            <div :key="elementIndex" v-for="elementIndex in ROWS_ELEMENTS" class="live__wrapper-img">
              <img :src="liveObjectDoubleArray[rowIndex][elementIndex - 1]?.imgUrl" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="block-live d-none d-block-md">
        <div class="container">
          <div class="live__wrapper">
            <div :key="elementIndex" v-for="(element, elementIndex) in LIVE_OBJECT_ARRAY" class="live__wrapper-img">
              <img :src="element?.imgUrl" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="block-loading" v-if="isItLoading">
      <v-progress-circular
        color="purple"
        indeterminate
        :size="50"
      ></v-progress-circular>
    </div>
  </div>
</template>


<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";

type GeneratedPicture = {
  imgUrl: string,
}

const ROWS_QUANTITY = ref(4);
const ROWS_ELEMENTS = ref(3);
let isItLoading = ref(true);

// const LIVE_OBJECT_ARRAY: GeneratedPicture[] = reactive([
//   {
//     id: "udasdya9sdha9sdy123",
//     name: "name 1",
//     imgUrl: "https://img.artpal.com/603472/1-23-3-14-13-30-19m.jpg"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 2",
//     imgUrl: "https://images-ng.pixai.art/images/thumb/238915e5-60ff-499a-9a44-3bb313d20b38"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 3",
//     imgUrl: "https://play-lh.googleusercontent.com/EEZRsDvcSq11pwv5SVEyVlqUe5r8nP1r4OL6LM8co4hBX_F1nERK1gtZ-Q8o70MJ_d4"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 4",
//     imgUrl: "https://neural.love/cdn/thumbnails/1ee617fe-7ae7-6cc6-8103-956c3e81432a/15d3415b-d41c-5ad9-a119-eed1e3b09871.webp?Expires=1714521599&Signature=DFyfLBfMn5X-g7WNhJJpJxjlIiFPVenBllmgsnMCsB0imZQsUm5i6p~12hS0qOR2Zk5F8kyYag-IwFc1bDxaQoRmGghBgjonKc~jChz2aJrdlBvdFUfS62e49QscMzBXVA8HYCbgukwIMt7xh29dKspgYThg8NBbzHvSyGi2GxJe34~8JlNYSxIDuBYu3rikP7FNcBK--1gVCQzgfwSZ1--zuQSeffaeMZheEoT3Y1CpAuXcSu6uzGwmPtrX5idUW2df29gP6r5JtaOkyuCjI54z0pSf0uleCqAqyOzK8ZEsqykGpuYtLJ5JPWBfYdmVqrAUAoqGbPq-1tVV1Pdg7Q__&Key-Pair-Id=K2RFTOXRBNSROX"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 5",
//     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea7b3a06-1fa5-4221-a190-202b51409c2e/dgcsbn3-07a67e06-17a2-4c7c-9f30-3366e52c136f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhN2IzYTA2LTFmYTUtNDIyMS1hMTkwLTIwMmI1MTQwOWMyZVwvZGdjc2JuMy0wN2E2N2UwNi0xN2EyLTRjN2MtOWYzMC0zMzY2ZTUyYzEzNmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-ukOChrCAyQRsN9SKP6dCC0qS49OQFtSObb--kLW4r8"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 6",
//     imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0b/95/3c/0b953c5d-766b-d15f-af05-cc7806a71538/AppIcon-0-1x_U007epad-0-85-220.png/512x512bb.jpg"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 7",
//     imgUrl: "https://play-lh.googleusercontent.com/f2oWCTX6jO74MoKsXXz0IkZRbKQsZlNiBCbWq8HHaR6_3JW5Z2LqgaWTB6_wxAZ5wPXb"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 8",
//     imgUrl: "https://steamuserimages-a.akamaihd.net/ugc/2011471682715216652/25A7F2E1402FA531736B646CBEC8F6FC292BF706/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 9",
//     imgUrl: "https://images-ng.pixai.art/images/orig/21bdc074-4022-4bfb-a024-fed1a2ebe853"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 10",
//     imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc885c93-e3d4-4b0a-ad14-5526bb96c515/dfuoce0-c3ba4277-0fcb-40f7-8052-fb70a4649bb7.png/v1/fill/w_512,h_512,q_80,strp/purple_anime_girl___profile_pic_by_hassyah_dfuoce0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYmM4ODVjOTMtZTNkNC00YjBhLWFkMTQtNTUyNmJiOTZjNTE1XC9kZnVvY2UwLWMzYmE0Mjc3LTBmY2ItNDBmNy04MDUyLWZiNzBhNDY0OWJiNy5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.x_b6UGCEjDdZU4NpA8tvNgVy0ZebLNCbE1G7MiZvC5g"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 11",
//     imgUrl: "https://storage.prompt-hunt.workers.dev/clgu9tkfk0001l808q9l1htqh_1"
//   },
//   {
//     id: "kaspdjasdua0s8dy",
//     name: "name 12",
//     imgUrl: "https://images.nightcafe.studio/jobs/VoF16wBXoxLKeCpi9ybh/VoF16wBXoxLKeCpi9ybh--1--awmek.jpg?tr=w-1600,c-at_max"
//   },
// ]);

const LIVE_OBJECT_ARRAY: GeneratedPicture[] = reactive([]);

const liveObjectDoubleArray: GeneratedPicture[][] = reactive(new Array([0][0]));

onMounted(async () => {
  let url = `http://localhost:62995`
  await axios.get(`${url}/live`).then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      LIVE_OBJECT_ARRAY[i] = {imgUrl: `data:image/png;base64,${response.data[i]}`};
    }
  }).then(() => {
    let counter: number = 0;
    for (let i = 1; i <= ROWS_QUANTITY.value; i++) {
      liveObjectDoubleArray[i] = [];
      let counterEachElement: number = 0;
      for (let j = counter; j < ROWS_ELEMENTS.value * i; j++) {
        liveObjectDoubleArray[i][counterEachElement] = LIVE_OBJECT_ARRAY[j];
        counterEachElement++;
        counter = j;
      }
      counter++;
    }
  }).catch(err => {
    console.log(err)
  }).finally(() =>
    isItLoading.value = false
  );
});
</script>
