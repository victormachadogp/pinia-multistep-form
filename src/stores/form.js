import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('userForm', () => {

   const user = ref({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      data: {
         message: '',
         pickedOption: '',
         subscriptionOption: '',
      }
   })

   const updatingInfo = ref('')

   const fullName = computed(() => {
      return `${user.value.name} ${user.value.lastName}`
   });

   const $reset = function () {
      user.value.name = '';
      user.value.lastName = '';
      user.value.email = '';
      user.value.phone = '';
      user.value.data.message = '';
      user.value.data.pickedOption = '';
      user.value.data.subscriptionOption = '';
   }

   return { user, updatingInfo, fullName, $reset }
})