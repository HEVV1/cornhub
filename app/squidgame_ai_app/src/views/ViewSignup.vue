<template>
  <form class="block-form" @submit.prevent="submit">
    <div class="container container-adaptive">
      <div class="form__wrapper">
        <div class="wrapper-input mb-2">
          <v-text-field
            v-model="username.value.value"
            :error-messages="username.errorMessage.value"
            label="Username"
            variant="outlined"
            :id="'username'"
          ></v-text-field>
        </div>
        <div class="wrapper-input mb-2">
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            variant="outlined"
            :id="'email_signup'"
          ></v-text-field>
        </div>
        <div class="wrapper-input mb-2">
          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="Password"
            type="password"
            variant="outlined"
            :id="'password_signup'"
            autocomplete="on"
          ></v-text-field>
        </div>
        <div class="wrapper-input">
          <v-text-field
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
            label="Confirm Password"
            type="password"
            variant="outlined"
            :id="'verif_password_signup'"
            autocomplete="on"
          ></v-text-field>
        </div>
        <div class="form__wrapper-bottom">
          <div class="wrapper-text">
            <span>Already have an account?</span>
            <button @click="onClickLogin" class="styled-as-signup">Log In</button>
          </div>
          <div class="wrapper-button">
            <v-btn
              type="submit"
              color="#B2124C"
            >
              sign up
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
    username(value) {
      if (value?.length >= 2) return true

      return 'Username can\'t be less than 2 characters';
    },
    password(value) {
      if (value?.length >= 6) return true

      return 'Password can\'t be less than 6 characters';
    },
    passwordConfirm(value) {
      if (password.value.value === value && value?.length > 0) return true

      return 'Passwords don\'t match';
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
  },
})

const username = useField('username');
const password = useField('password');
const passwordConfirm = useField('passwordConfirm');
const email = useField('email');

const submit = handleSubmit(values => {
  console.log('SUBMITED VALUES: ', values);
  alert(JSON.stringify(values, null, 2))
})

const onClickLogin= () => {
  useStoreCookies().setComponent(Components.LOGIN);
  useStoreCookies().getComponent('component');
}

</script>
