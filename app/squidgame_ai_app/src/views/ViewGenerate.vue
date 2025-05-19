<template>
  <section class="block-generate">
    <div class="container">
      <div class="generate__wrapper">
        <div class="generate__form-spot">
          <form id="form_generate" class="block-form form-generate" action="/generate" method="post"
                @submit.prevent="generateObject">
            <div class="form__wrapper">
              <div class="block-select">
                <v-select
                  v-model="valueGeneratorId"
                  dark
                  :item-color="'pink'"
                  label="Select"
                  :items="GENERATOR_ID_PROPS"
                  item-title="abbr"
                  item-value="generatorId"
                  persistent-hint
                  single-line
                  variant="outlined"
                  return-object
                ></v-select>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Style</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueStyle">
                  <v-btn v-for="value in _STYLE" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Poses</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valuePoses">
                  <v-btn v-for="value in POSES" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Filters</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueFilter">
                  <v-btn v-for="value in FILTERS" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Base</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueBase">
                  <v-btn v-for="value in BASE" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Clothing</span>
                </div>
                <v-btn-toggle mandatory multiple class="form__row-elements" color="pink-darken-1"
                              v-model="valueClothing">
                  <v-btn v-for="value in CLOTHING" :value="value" :key="value" variant="outlined">
                    {{ value }}{{ value === '60' || value === '70' || value === '80' || value === '90' ? 's' : '' }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Hair Color</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueHairColor">
                  <v-btn v-for="value in HAIR_COLOR" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Hair Style</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueHairStyle">
                  <v-btn v-for="value in HAIR_STYLE" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Ethnicity</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueEthnicity">
                  <v-btn v-for="value in ETHNICITY" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Body</span>
                </div>
                <v-btn-toggle mandatory multiple class="form__row-elements" color="pink-darken-1" v-model="valueBody">
                  <v-btn v-for="value in BODY" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div class="form__row">
                <div class="wrapper-text">
                  <span class="styled-as-24-600">Number of people</span>
                </div>
                <v-btn-toggle mandatory class="form__row-elements" color="pink-darken-1" v-model="valueNumberOfPeople">
                  <v-btn v-for="value in NUMBER_OF_PEOPLE" :value="value" :key="value" variant="outlined">
                    {{ value }}
                  </v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </form>
        </div>
        <div class="generate__image-spot">
          <div class="generate__image-wrapper no-image">
            <div class="generate__image-wrapper--no-image">
              <div class="wrapper-text">
                <span>Choose your tags and click generate!</span>
              </div>
            </div>
            <div class="generate__image-wrapper--is-image d-none">
              <img alt=""
                   src="https://images.nightcafe.studio/jobs/VoF16wBXoxLKeCpi9ybh/VoF16wBXoxLKeCpi9ybh--1--awmek.jpg?tr=w-1600,c-at_max">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-button-submit">
      <v-btn form="form_generate" type="submit" color="#B2124C">
        GENERATE
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, watch, onMounted, reactive} from "vue";
// CONSTANT VARIABLES
import {useStoreProp} from "@/stores/useStoreProp";
import {useStoreCookies} from "@/stores/useStoreCookies";
import {Components} from "@/enums/Components";
// CLASSES
import HumanGenerator from "@/classes/HumanGenerator";
import User from "@/classes/User";

const {
  BASE,
  NUMBER_OF_PEOPLE,
  BODY,
  HAIR_COLOR,
  HAIR_STYLE,
  ETHNICITY,
  _STYLE,
  CLOTHING,
  GENERATOR_ID_PROPS,
  POSES,
  FILTERS
} = useStoreProp();


let objForRequest: any = reactive({prompt: {}});
let objFromCookies: any = reactive({});

const userId = ref('65f0c68bfcaaab335e28473d');
// SELECTED VARIABLES
const valueStyle = ref(_STYLE[0]);
const valuePoses = ref(POSES[0]);
const valueFilter = ref(FILTERS[0]);
const valueGeneratorId: any = ref({generatorId: GENERATOR_ID_PROPS[0].generatorId, abbr: GENERATOR_ID_PROPS[0].abbr});
// PROMPT
const valueBase = ref(BASE[0]);
const valueClothing = ref([CLOTHING[0]]);
const valueHairColor = ref(HAIR_COLOR[0]);
const valueHairStyle = ref(HAIR_STYLE[0]);
const valueEthnicity = ref(ETHNICITY[0]);
const valueBody = ref([BODY[0]]);
const valueNumberOfPeople = ref(NUMBER_OF_PEOPLE[0]);


const generateObject = () => {
  const userInstance = new User(userId.value);
  const generateInstance: HumanGenerator = new HumanGenerator(
    valueHairColor.value,
    valueHairStyle.value,
    valueEthnicity.value,
    valueBody.value,
  );
  generateInstance.setStyle = valueStyle.value;
  generateInstance.setNumberOfPeople = valueNumberOfPeople.value;
  generateInstance.setBase = valueBase.value;
  generateInstance.setClothing = valueClothing.value;
  generateInstance.setGeneratorId = valueGeneratorId.value.generatorId;
  generateInstance.setPoses = valuePoses.value;
  generateInstance.setFilter = valueFilter.value;

  // MAIN VALUES
  Object.assign(objForRequest, generateInstance.getStyle)
  Object.assign(objForRequest, generateInstance.getPoses)
  Object.assign(objForRequest, generateInstance.getFilter)
  Object.assign(objForRequest, generateInstance.getGeneratorId)
  Object.assign(objForRequest, userInstance.getUserId)

  // PROMPT
  Object.assign(objForRequest.prompt, generateInstance.getBase)
  Object.assign(objForRequest.prompt, generateInstance.getClothing)
  Object.assign(objForRequest.prompt, generateInstance.getHairColor)
  Object.assign(objForRequest.prompt, generateInstance.getHairStyle)
  Object.assign(objForRequest.prompt, generateInstance.getEthnicity)
  Object.assign(objForRequest.prompt, generateInstance.getBody)
  Object.assign(objForRequest.prompt, generateInstance.getNumberOfPeople)

  objForRequest = JSON.parse(JSON.stringify(objForRequest))

  useStoreCookies().setGeneratedParameters(JSON.stringify(objForRequest));
};


onMounted(() => {
  useStoreCookies().getComponent('generate');
  if (useStoreCookies().cookie['generate'] !== undefined) {
    const cookieStringObject: string = useStoreCookies().cookie['generate'];
    objFromCookies = JSON.parse(cookieStringObject);
    console.log('CONVERTED OBJECT: ', objFromCookies);

    // MAIN VALUES
    valueStyle.value = objFromCookies.Style;
    valuePoses.value = objFromCookies.poses;
    valueFilter.value = objFromCookies.filter;
    valueGeneratorId.value.generatorId = objFromCookies.generatorId;
    valueGeneratorId.value.abbr = GENERATOR_ID_PROPS[GENERATOR_ID_PROPS.map(x => x.generatorId).indexOf(objFromCookies.generatorId)].abbr;


    // PROMPT
    valueBase.value = objFromCookies.prompt.Base;
    valueClothing.value = objFromCookies.prompt.Clothing;
    valueHairColor.value = objFromCookies.prompt['Hair Color'];
    valueHairStyle.value = objFromCookies.prompt['Hair Style'];
    valueEthnicity.value = objFromCookies.prompt.Ethnicity;
    valueBody.value = objFromCookies.prompt.Body;
    valueNumberOfPeople.value = objFromCookies.prompt['Number of people'];
  }
});

watch([valueStyle, valuePoses, valueFilter, valueGeneratorId, valueBase, valueClothing, valueHairColor, valueHairStyle, valueEthnicity, valueBody, valueNumberOfPeople], () => {
  generateObject();
});

</script>
