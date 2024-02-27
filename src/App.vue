<script setup>
</script>

<template>
   <div class="wrapper">
      <RouterView />
   </div>
</template>

<style>
* {
   box-sizing: border-box;
}

body {
   background-color: #f7f7f9;
}

.wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
}

.main {
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 5rem;
   background-color: white;
   border-radius: 10px;
   margin-left: 1rem;
   margin-right: 1rem;
}

.form {
   margin-left: 2rem;
   margin-right: 2rem;
}

@media (min-width: 768px) {
   .main {
      display: flex;
      margin-top: inherit;
      flex-direction: row;
      justify-content: center;
      height: 650px;
      margin-left: inherit;
      margin-right: inherit;
   }

   .wrapper {
      display: flex;
      height: 95vh;
      justify-content: center;
      align-items: center;
   }

   .form {
      width: 700px;
      margin-left: inherit;
      margin-right: inherit;
   }
}
</style>
