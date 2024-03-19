import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {

   const user = {
      name: ref(''),
      lastName: ref(''),
      email: ref(''),
      phone: ref(''),
      data: {
         message: ref(''),
         pickedOption: ref(''),
         subscriptionOption: ref(''),
      }
   }

   const updatingInfo = ref('')

   const fullName = computed(() => {
      return `${user.name.value} ${user.lastName.value}`
   });

   const $reset = function () {
      user.name = '';
      user.lastName = '';
      user.email = '';
      user.phone = '';
      user.data.message = '';
      user.data.pickedOption = '';
      user.data.subscriptionOption = '';
   }

   return { user, updatingInfo, fullName, $reset }
})