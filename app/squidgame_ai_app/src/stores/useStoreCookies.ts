import {defineStore} from "pinia";
import {ref, computed} from "vue";
import {Components} from "@/enums/Components";

export const useStoreCookies = defineStore('storeCookies', () => {

  const setComponent = (component: Components): void => {
    document.cookie = `component=${component}`;
  }

  const setGeneratedParameters = (object: any): void => {
    document.cookie = `generate=${object}`;
  }

  const _cookies: { [key: string]: any } = ref([]);
  const cookie = computed(() => _cookies.value);

  const getComponent = (cookieParam: string) => {
    const cookieKey: string = cookieParam + '='; // COOKIE KEY THAT WE ARE WANT TO GET
    const cookieArray = decodeURIComponent(document.cookie).split(';'); // ARRAY OF ALL COOKIES IN DOCUMENT
    for (let i = 0; i < cookieArray.length; i++) {
      const eachCookie = ref(cookieArray[i]);
      while (eachCookie.value.charAt(0) == ' ') { // REMOVING THE SPACES WITH [CHAR AT] & [SUBSTRING] METHODS
        eachCookie.value = eachCookie.value.substring(1);
      }
      if (eachCookie.value.indexOf(cookieKey) !== -1) {
        _cookies.value[cookieParam] = eachCookie.value.substring(cookieKey.length, eachCookie.value.length);
      }
    }
  }

  return {
    setComponent, cookie, getComponent, setGeneratedParameters
  }
});
