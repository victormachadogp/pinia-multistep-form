<template>
   <main class="main shadow-lg flex-col md:flex-row">
      <Stepper />
      <section class="form flex flex-col justify-between">
         <div class="">
            <div class="mx-auto max-w-lg pt-10">
               <h1 class="text-2xl mb-2">Success</h1>

               <p class="text-sm text-gray-400">Please provide your name, email addres, and phone number.</p>
            </div>
         </div>
      </section>
   </main>
</template>

<script setup>
import { ref } from "vue"
import { useFormStore } from "@/stores/form"
import { storeToRefs } from "pinia"
import DynamicSubmitButton from "@/components/DynamicSubmitButton.vue"
import Stepper from "@/components/Stepper.vue"

const formStore = useFormStore()

const { name, lastName, email, phone } = storeToRefs(formStore)

const handleSubmit = () => {
   formStore.updateName(name)

   console.log(formStore.$state)
}
</script>


<style scoped>
</style>
