<template>
  <main class="main">
    <!-- <img class="form-image" src="../assets/almond_blossom.jpeg" alt=""> -->
    <div class="form-image-wrapper">

    </div>
    <section class="form">
        <div class="mx-auto max-w-lg pt-10">
        <h1 class="text-2xl mb-2">
          Please Review Your Info
        </h1>

        <p class="text-sm text-gray-400">
          Please provide your name, email addres, and phone number.
        </p>
      </div>

      <div class="mx-auto max-w-lg pt-10">
        <p>{{ name }}</p>
        <p>{{ lastName }}</p>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
        <p>{{ message }}</p>
        <p>{{ pickedOption }}</p>
        <p>{{ subscriptionOption }}</p>
        
        <p>{{ fullName }}</p>
  
</div>


    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useFormStore } from '@/stores/form'
import { storeToRefs } from "pinia"

const formStore = useFormStore()

const { name, lastName, email, phone, message, pickedOption, subscriptionOption, fullName } = storeToRefs( formStore )
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

  .active {
    @apply border-indigo-600 ring-2 ring-indigo-600
  }

  .active svg {
    @apply visible
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
