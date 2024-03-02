<template>
   <main class="main shadow-lg flex-col md:flex-row">
      <Stepper />
      <section class="form flex flex-col justify-center">
         <div class="pb-12">
            <div class="mx-auto max-w-lg">
               <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                     <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                     </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                     <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Subscription successful</h3>
                     <div class="mt-2">
                        <p class="text-sm text-gray-500">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi
                           vitae error totam. At sapiente aliquam accusamus facere veritatis.
                        </p>
                     </div>
                  </div>
               </div>
               <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense justify-center">
                  <button
                     @click="resetAndNavigate"
                     type="button"
                     class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  >
                     Return to Start
                  </button>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>

<script setup>
import { ref } from "vue"
import { useFormStore } from "@/stores/form"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import DynamicSubmitButton from "@/components/DynamicSubmitButton.vue"
import Stepper from "@/components/Stepper.vue"

const formStore = useFormStore()
const router = useRouter()

const { name, lastName, email, phone, $reset } = storeToRefs(formStore)

const handleSubmit = () => {
   formStore.updateName(name)

   console.log(formStore.$state)
}

const resetAndNavigate = () => {
   formStore.$reset()

   router.push({ path: "/" })
}
</script>


<style scoped>
</style>
