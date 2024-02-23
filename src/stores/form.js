import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const name = ref("Jebediah")
  const lastName = ref("")
  const email = ref("")
  const phone = ref("")
  const message = ref("")
  const pickedOption = ref("")
  const subscriptionOption = ref("")

  function updateName(e) { 
    name.value = e
  }

  return { name, lastName, email, phone, message, pickedOption, subscriptionOption, updateName }
})