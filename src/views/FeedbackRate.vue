<template>
   <main class="main shadow-lg">
      <Stepper />
      <section class="form flex flex-col justify-between">
         <div>
            <div class="mx-auto max-w-lg pt-10">
               <h1 class="text-2xl mb-2">Share Your Feedback</h1>

               <p class="text-sm text-gray-400">Your Feedback Is Valued and Appreciated, Thank You.</p>
            </div>

            <div class="mx-auto max-w-lg pt-10">
               <fieldset>
                  <legend class="text-base font-semibold leading-6 text-gray-900">Feedback Rating</legend>

                  <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                     <!-- Active: "border-indigo-600 ring-2 ring-indigo-600", Not Active: "border-gray-300" -->
                     <label
                        :class="{ active: subscriptionOption === 'Fair' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="feedback-rating"
                           value="Fair"
                           class="sr-only"
                           aria-labelledby="feedback-rating-0-label"
                           aria-describedby="feedback-rating-0-description-0 feedback-rating-0-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="feedback-rating-0-label" class="block text-sm font-medium text-gray-900">Fair</span>
                              <span id="feedback-rating-0-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Average experience, room for improvement</span
                              >
                           </span>
                        </span>
                        <!-- Not Checked: "invisible" -->
                        <svg class="h-5 w-5 invisible text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-600", Not Checked: "border-transparent"
      -->
                        <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
                     </label>
                     <!-- Active: "border-indigo-600 ring-2 ring-indigo-600", Not Active: "border-gray-300" -->
                     <label
                        :class="{ active: subscriptionOption === 'Good' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="feedback-rating"
                           value="Good"
                           class="sr-only"
                           aria-labelledby="feedback-rating-1-label"
                           aria-describedby="feedback-rating-1-description-0 feedback-rating-1-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="feedback-rating-1-label" class="block text-sm font-medium text-gray-900">Good</span>
                              <span id="feedback-rating-1-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Satisfactory experience, met expectations</span
                              >
                           </span>
                        </span>
                        <!-- Not Checked: "invisible" -->
                        <svg class="h-5 w-5 text-indigo-600 invisible" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-600", Not Checked: "border-transparent"
      -->
                        <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
                     </label>
                     <!-- Active: "border-indigo-600 ring-2 ring-indigo-600", Not Active: "border-gray-300" -->
                     <label
                        :class="{ active: subscriptionOption === 'Excellent' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="feedback-rating"
                           value="Excellent"
                           class="sr-only"
                           aria-labelledby="feedback-rating-2-label"
                           aria-describedby="feedback-rating-2-description-0 feedback-rating-2-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="feedback-rating-2-label" class="block text-sm font-medium text-gray-900">Excellent</span>
                              <span id="feedback-rating-2-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Outstanding service, exceeded expectations</span
                              >
                           </span>
                        </span>
                        <!-- Not Checked: "invisible" -->
                        <svg class="h-5 w-5 text-indigo-600 invisible" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-600", Not Checked: "border-transparent"
      -->
                        <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
                     </label>
                  </div>
               </fieldset>
            </div>
         </div>

         <div class="mx-auto max-w-lg w-full pb-10">
            <div class="flex justify-end border-t border-gray-300 mt-12 md:mt-0">
               <div class="flex items-center mt-10">
                  <router-link to="/feedback-preferences">
                     <button class="text-gray-400 mx-5 font-medium">Go Back</button>
                  </router-link>
                  <router-link to="/review-details">
                     <DynamicSubmitButton />
                  </router-link>
               </div>
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

const { subscriptionOption } = storeToRefs(formStore)

const handleSubmit = () => {
   formStore.updateName(location)

   console.log(formStore.$state)
}
</script>


<style scoped>
.active {
   @apply border-indigo-600 ring-2 ring-indigo-600;
}

.active svg {
   @apply visible;
}
</style>
