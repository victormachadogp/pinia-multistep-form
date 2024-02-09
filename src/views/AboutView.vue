<template>
  <main class="main">
    <!-- <img class="form-image" src="../assets/almond_blossom.jpeg" alt=""> -->
    <div class="form-image-wrapper">

    </div>
    <section class="form">
      <div>
        <label for="location">Location</label>
        <input name="location"/>
      </div>
    </section>

  </main>
</template>

<script setup>
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
