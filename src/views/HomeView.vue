<template>
   <main class="main">
      <!-- <img class="form-image" src="../assets/almond_blossom.jpeg" alt=""> -->

      <div class="form-image-wrapper"></div>
      <section class="form">
         <div class="mx-auto max-w-lg pt-10">
            <h1 class="text-2xl mb-2">Personal Info</h1>

            <p class="text-sm text-gray-400">Please provide your name, email addres, and phone number.</p>
         </div>

         <form action="#" method="POST" class="px-6 lg:px-8 pt-10">
            <div class="mx-auto max-w-lg">
               <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                     <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                     <div class="mt-2.5">
                        <input
                           v-model="name"
                           type="text"
                           name="first-name"
                           id="first-name"
                           autocomplete="given-name"
                           class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
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
                           class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
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
                           class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
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

               <div class="border-t border-gray-300 mt-24"></div>

               <div class="mt-8 flex justify-end">
                  <router-link to="/about">
                     <DynamicSubmitButton />
                  </router-link>
               </div>
            </div>
         </form>
      </section>
   </main>
</template>

<script setup>
import { ref } from "vue"
import { useFormStore } from "@/stores/form"
import { storeToRefs } from "pinia"
import DynamicSubmitButton from "@/components/DynamicSubmitButton.vue"

const formStore = useFormStore()

const { name, lastName, email, phone } = storeToRefs(formStore)

const handleSubmit = () => {
   formStore.updateName(name)

   console.log(formStore.$state)
}
</script>


<style scoped>
.main {
   display: flex;
   justify-content: center;
   background-color: white;
   /* max-width: 1100px; */
   height: 500px;
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
