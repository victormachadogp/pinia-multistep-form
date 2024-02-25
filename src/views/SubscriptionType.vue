<template>
   <main class="main">
      <!-- <img class="form-image" src="../assets/almond_blossom.jpeg" alt=""> -->
      <div class="form-image-wrapper"></div>
      <section class="form flex flex-col justify-between">
         <div>
            <div class="mx-auto max-w-lg pt-10">
               <h1 class="text-2xl mb-2">Subscription Type</h1>

               <p class="text-sm text-gray-400">Please provide your name, email addres, and phone number.</p>
            </div>

            <div class="mx-auto max-w-lg pt-10">
               <fieldset>
                  <legend class="text-base font-semibold leading-6 text-gray-900">Select a mailing list</legend>

                  <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                     <!-- Active: "border-indigo-600 ring-2 ring-indigo-600", Not Active: "border-gray-300" -->
                     <label
                        :class="{ active: subscriptionOption === 'Newsletter' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="project-type"
                           value="Newsletter"
                           class="sr-only"
                           aria-labelledby="project-type-0-label"
                           aria-describedby="project-type-0-description-0 project-type-0-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="project-type-0-label" class="block text-sm font-medium text-gray-900">Newsletter</span>
                              <span id="project-type-0-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Last message sent an hour ago</span
                              >
                              <span id="project-type-0-description-1" class="mt-6 text-sm font-medium text-gray-900">621 users</span>
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
                        :class="{ active: subscriptionOption === 'Existing Customers' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="project-type"
                           value="Existing Customers"
                           class="sr-only"
                           aria-labelledby="project-type-1-label"
                           aria-describedby="project-type-1-description-0 project-type-1-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="project-type-1-label" class="block text-sm font-medium text-gray-900">Existing Customers</span>
                              <span id="project-type-1-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Last message sent 2 weeks ago</span
                              >
                              <span id="project-type-1-description-1" class="mt-6 text-sm font-medium text-gray-900">1200 users</span>
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
                        :class="{ active: subscriptionOption === 'Trial Users' }"
                        class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                     >
                        <input
                           v-model="subscriptionOption"
                           type="radio"
                           name="project-type"
                           value="Trial Users"
                           class="sr-only"
                           aria-labelledby="project-type-2-label"
                           aria-describedby="project-type-2-description-0 project-type-2-description-1"
                        />
                        <span class="flex flex-1">
                           <span class="flex flex-col">
                              <span id="project-type-2-label" class="block text-sm font-medium text-gray-900">Trial Users</span>
                              <span id="project-type-2-description-0" class="mt-1 flex items-center text-sm text-gray-500"
                                 >Last message sent 4 days ago</span
                              >
                              <span id="project-type-2-description-1" class="mt-6 text-sm font-medium text-gray-900">2740 users</span>
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
            <div class="flex justify-end border-t border-gray-300">
               <div class="flex items-center mt-10">
                  <router-link to="/about">
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

const formStore = useFormStore()

const { subscriptionOption } = storeToRefs(formStore)

const handleSubmit = () => {
   formStore.updateName(location)

   console.log(formStore.$state)
}
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
