<template>
   <div v-if="!updatingInfo">   
      <button
         @click="handleSubmitFunction"
         type="button"
         class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
         Next Step
      </button>
      
   </div>
   
   <div v-else>
      <router-link to="/confirmation">
      <button
         @click="handleSubmitFunction"
         type="button"
         class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
         Finish Update
      </button>
      </router-link>
   </div>
</template>

<script setup>
import { ref } from "vue"
import { useFormStore } from "@/stores/form"
import { storeToRefs } from "pinia"

const formStore = useFormStore()

const { updatingInfo } = storeToRefs(formStore)

const handleSubmitFunction = function() {
   updatingInfo.value = false
}



</script>

<style scoped>
</style>