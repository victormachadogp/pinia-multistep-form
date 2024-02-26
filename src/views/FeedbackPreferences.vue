<template>
   <main class="main">
      <Stepper />
      <section class="form flex flex-col justify-between">
         <div>
            <div class="mx-auto max-w-lg pt-10">
               <h1 class="text-2xl mb-2">Feedback & Preferences</h1>

               <p class="text-sm text-gray-400">Please share your thoughts and preferences.</p>
            </div>

            <div class="mx-auto max-w-lg pt-10">
               <label for="comment" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
               <div class="mt-2">
                  <textarea
                     v-model="message"
                     rows="4"
                     name="comment"
                     id="comment"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
               </div>

               <div class="pt-10">
                  <label class="text-base font-semibold text-gray-900">Notifications</label>
                  <p class="text-sm text-gray-500">How do you prefer to receive notifications?</p>
                  <fieldset class="mt-4">
                     <legend class="sr-only">Notification method</legend>
                     <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        <div class="flex items-center">
                           <input
                              v-model="pickedOption"
                              id="email"
                              name="notification-method"
                              type="radio"
                              value="Email"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                           <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
                        </div>
                        <div class="flex items-center">
                           <input
                              v-model="pickedOption"
                              id="sms"
                              name="notification-method"
                              value="SMS"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                           <label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Phone (SMS)</label>
                        </div>
                        <div class="flex items-center">
                           <input
                              v-model="pickedOption"
                              id="no-contact"
                              name="notification-method"
                              value="No Notifications"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                           />
                           <label for="no-contact" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Do not send notifications</label>
                        </div>
                     </div>
                  </fieldset>
               </div>
            </div>
         </div>
         <div class="mx-auto max-w-lg w-full pb-10">
            <div class="flex justify-end border-t border-gray-300">
               <div class="flex items-center mt-10">
                  <router-link to="/">
                     <button class="text-gray-400 mx-5 font-medium">Go Back</button>
                  </router-link>
                  <router-link to="/feedback-rate">
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

const { message, pickedOption } = storeToRefs(formStore)

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
