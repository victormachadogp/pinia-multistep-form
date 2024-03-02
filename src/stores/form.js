import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
   const name = ref('')
   const lastName = ref('')
   const email = ref('')
   const phone = ref('')
   const message = ref('')
   const pickedOption = ref('')
   const subscriptionOption = ref('')
   const updatingInfo = ref('')

   function updateName(e) {
      name.value = e
   }

   const fullName = computed(() => {
      return `${name.value} ${lastName.value}`
   });

   const $reset = function () {
      name.value = ref(" ")
      lastName.value = ref('')
      email.value = ref('')
      phone.value = ref('')
      message.value = ref('')
      pickedOption.value = ref('')
      subscriptionOption.value = ref('')
      updatingInfo.value = ref('')
   }

   return { name, lastName, email, phone, message, pickedOption, subscriptionOption, updatingInfo, updateName, fullName, $reset }
})
