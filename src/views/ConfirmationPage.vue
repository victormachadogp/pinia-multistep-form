<template>
   <main class="main">
      <!-- <img class="form-image" src="../assets/almond_blossom.jpeg" alt=""> -->
      <div class="form-image-wrapper"></div>
      <section class="form">
         <div class="mx-auto max-w-lg pt-10">
            <h1 class="text-2xl mb-2">Please Review Your Info</h1>

            <p class="text-sm text-gray-400">Please provide your name, email addres, and phone number.</p>
         </div>

         <div class="mx-auto max-w-lg pt-10">
            <div class="mt-6 border-t border-gray-100">
               <dl class="divide-y divide-gray-100">
                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ fullName }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <router-link to="/">
                              <button @click="updateInfo" type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">
                                 Update
                              </button>
                           </router-link>
                        </span>
                     </dd>
                  </div>
                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ email }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                        </span>
                     </dd>
                  </div>
                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ phone }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                        </span>
                     </dd>
                  </div>
                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Message</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ truncatedMessage }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                        </span>
                     </dd>
                  </div>

                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Picked Option</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ pickedOption }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                        </span>
                     </dd>
                  </div>

                  <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt class="text-sm font-medium leading-6 text-gray-900">Subscription Option</dt>
                     <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow">{{ subscriptionOption }}</span>
                        <span class="ml-4 flex-shrink-0">
                           <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                        </span>
                     </dd>
                  </div>
               </dl>
            </div>

            <div class="border-t border-gray-300 mt-24"></div>

            <div class="mt-8 flex justify-end items-center">
               <router-link to="/subscription">
                  <button class="text-gray-400 mx-5 font-medium">Go Back</button>
               </router-link>
               <button
                  @click="handleSubmitFunction"
                  type="button"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Next Step
               </button>
            </div>
         </div>
      </section>
   </main>
</template>

<script setup>
import { ref, computed } from "vue"
import { useFormStore } from "@/stores/form"
import { storeToRefs } from "pinia"

const formStore = useFormStore()

const { name, lastName, email, phone, message, pickedOption, subscriptionOption, updatingInfo, fullName } = storeToRefs(formStore)

const updateInfo = function () {
   updatingInfo.value = true
}

const truncatedMessage = computed(() => {
   const words = message.value.split(" ")
   const maxWords = 10

   return words.slice(0, maxWords).join(" ") + "..."
})
</script>

<style scoped>
.main {
   display: flex;
   justify-content: center;
   background-color: white;
   /* max-width: 1100px; */
   height: 650px;
   border-radius: 10px;
}

.active {
   @apply border-indigo-600 ring-2 ring-indigo-600;
}

.active svg {
   @apply visible;
}

.form-image-wrapper {
   width: 300px;
   height: 100%;
   background-image: url("../assets/almond_blossom.jpeg");
   background-size: cover;
}
/* 
  .form-image {
    width: 100%;
    max-width: 200px;
  } */

.form {
   width: 700px;
}
</style>
