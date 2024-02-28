<template>
   <main class="main shadow-lg">
      <Stepper />
      <section class="form flex flex-col justify-between">
         <div class="mx-auto max-w-lg pt-10">
            <div>
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
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
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
                              <router-link to="/">
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
                                    Update
                                 </button>
                              </router-link>
                           </span>
                        </dd>
                     </div>
                     <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                           <span class="flex-grow">{{ phone }}</span>
                           <span class="ml-4 flex-shrink-0">
                              <router-link to="/">
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
                                    Update
                                 </button>
                              </router-link>
                           </span>
                        </dd>
                     </div>
                     <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Message</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                           <span class="flex-grow">{{ truncatedMessage }}</span>
                           <span class="ml-4 flex-shrink-0">
                              <router-link to="/feedback-preferences">
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
                                    Update
                                 </button>
                              </router-link>
                           </span>
                        </dd>
                     </div>

                     <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Notification</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                           <span class="flex-grow">{{ pickedOption }}</span>
                           <span class="ml-4 flex-shrink-0">
                              <router-link to="/feedback-preferences">
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
                                    Update
                                 </button>
                              </router-link>
                           </span>
                        </dd>
                     </div>

                     <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Feedback Rate</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                           <span class="flex-grow">{{ subscriptionOption }}</span>
                           <span class="ml-4 flex-shrink-0">
                              <router-link to="/feedback-rate">
                                 <button
                                    @click="updateInfo"
                                    type="button"
                                    class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                                 >
                                    Update
                                 </button>
                              </router-link>
                           </span>
                        </dd>
                     </div>
                  </dl>
               </div>
            </div>
         </div>

         <div class="mx-auto max-w-lg w-full pb-10">
            <div class="flex justify-end border-t border-gray-300 mt-12 md:mt-0">
               <div class="flex items-center mt-10">
                  <router-link to="/feedback-rate">
                     <button class="text-gray-400 mx-5 font-medium">Go Back</button>
                  </router-link>
                  <router-link to="#">
                     <button
                        @click="handleSubmitFunction"
                        type="button"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Finish
                     </button>
                  </router-link>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>

<script setup>
import { ref, computed } from "vue"
import { useFormStore } from "@/stores/form"
import { storeToRefs } from "pinia"
import Stepper from "@/components/Stepper.vue"

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
.active {
   @apply border-indigo-600 ring-2 ring-indigo-600;
}

.active svg {
   @apply visible;
}

.form {
   margin: 0 1.5rem;
}

@media (media: 768px) {
   .form {
      margin: inherit;
   }
}
</style>
