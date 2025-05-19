<template>
  <form class="block-form" @submit.prevent="submit">
    <div class="container container-adaptive">
      <div class="form__wrapper">
        <div class="wrapper-input mb-2">
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            variant="outlined"
            :id="'email_login'"
          ></v-text-field>
        </div>
        <div class="wrapper-input">
          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="Password"
            type="password"
            variant="outlined"
            :id="'password_login'"
            autocomplete="on"
          ></v-text-field>
        </div>
        <div class="wrapper-checkbox">
          <v-checkbox
            v-model="checkboxRememberMe.value.value"
            label="Remember Me"
            type="checkbox"
            :base-color="'#D70C55'"
            :id="'check_box'"
          ></v-checkbox>
        </div>
        <div class="form__wrapper-bottom">
          <div class="wrapper-text">
            <span>Don't have an account?</span>
            <button class="styled-as-signup" @click="onClickSignUp">Sign Up</button>
          </div>
          <div class="wrapper-button">
            <v-btn
              type="submit"
              color="#B2124C"
            >
              log in
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<script setup>
// ENUMS
import {Components} from "@/enums/Components";
import {useField, useForm} from 'vee-validate'
import {useStoreCookies} from "@/stores/useStoreCookies";



const {handleSubmit, handleReset} = useForm({
  validationSchema: {
    password(value) {
      if (value?.length > 0) return true

      return 'Field cannot be empty';
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
  },
})

const password = useField('password');
const email = useField('email');
const checkboxRememberMe = useField('checkbox');

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

const onClickSignUp = () => {
  useStoreCookies().setComponent(Components.SIGNUP);
  useStoreCookies().getComponent('component');
}
</script>
