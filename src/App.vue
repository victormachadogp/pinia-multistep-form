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
   margin-top: 10rem;
   background-color: white;
   border-radius: 10px;
}

.form {
   width: 700px;
}

@media (min-width: 768px) {
   .main {
      display: flex;
      margin-top: inherit;
      flex-direction: row;
      justify-content: center;
      height: 650px;
   }

   .wrapper {
      display: flex;
      height: 95vh;
      justify-content: center;
      align-items: center;
   }
}
</style>
