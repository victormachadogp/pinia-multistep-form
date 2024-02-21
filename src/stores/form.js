import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const name = ref("Jebediah")
  const lastName = ref("")
  const email = ref("")
  const phone = ref("")
  const location = ref("")


  function updateName(e) { 
    name.value = e
  }

  return { name, lastName, email, phone, location, updateName }
})