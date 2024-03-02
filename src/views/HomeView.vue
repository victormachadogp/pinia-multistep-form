<template>
   <main class="main shadow-lg flex-col md:flex-row">
      <Stepper />
      <section class="form flex flex-col justify-between">
         <div class="">
            <div class="mx-auto max-w-lg pt-10">
               <h1 class="text-2xl mb-2">Personal Info</h1>

               <p class="text-sm text-gray-400">Please provide your name, email addres, and phone number.</p>
            </div>

            <form action="#" method="POST" class="px-6 lg:px-8 pt-10">
               <div class="mx-auto max-w-lg">
                  <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                     <!-- <p v-if="errors.length">
                        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                        <ul>
                           <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                     </p> -->

                     <div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div class="mt-2.5">
                           <input
                              v-model="name"
                              type="text"
                              name="first-name"
                              id="first-name"
                              autocomplete="given-name"
                              :class="{
                                 'ring-red-400': errors.name,
                                 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6': true,
                              }"
                           />
                        </div>
                        <p v-if="errors.name" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.name }}</p>
                     </div>
                     <div>
                        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                        <div class="mt-2.5">
                           <input
                              v-model="lastName"
                              type="text"
                              name="last-name"
                              id="last-name"
                              autocomplete="family-name"
                              :class="{
                                 'ring-red-400': errors.lastName,
                                 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6': true,
                              }"
                           />
                        </div>
                        <p v-if="errors.lastName" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.lastName }}</p>
                     </div>
                     <div class="sm:col-span-1">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                           <input
                              v-model="email"
                              type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              :class="{
                                 'ring-red-400': errors.email,
                                 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6': true,
                              }"
                           />
                        </div>
                        <p v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.email }}</p>
                     </div>
                     <div class="sm:col-span-1">
                        <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                        <div class="mt-2.5">
                           <input
                              v-model="phone"
                              type="tel"
                              name="phone-number"
                              id="phone-number"
                              autocomplete="tel"
                              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>

         <div class="mx-auto max-w-lg w-full pb-10">
            <div class="flex justify-end border-t border-gray-300 mt-12 md:mt-0">
               <router-link class="mt-10" to="/feedback-preferences">
                  <DynamicSubmitButton @click="validateForm" />
               </router-link>
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

let errors = ref({})

const { name, lastName, email, phone } = storeToRefs(formStore)

function validateForm(e) {
   errors.value = {}

   if (!name.value || /^\s*$/.test(name.value)) {
      errors.value.name = "First name is required"
      e.preventDefault()
   }

   if (!lastName.value || /^\s*$/.test(lastName.value)) {
      errors.value.lastName = "Last name is required"
      e.preventDefault()
   }

   if (!email.value || /^\s*$/.test(email.value)) {
      errors.value.email = "Email is required"
      e.preventDefault()
   }
}
</script>


<style scoped>
</style>
