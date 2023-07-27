<template>
  <div class="home">
  <!-- <img src="../assets/paw.png" /> -->
  <!-- <span> Pet Lovers </span> -->
    <PetDetails />
  </div>
</template>

<script>
import PetDetails from "@/components/PetDetails.vue";

export default {
  name: "Home",
  components: {
    PetDetails,
  },
};
</script>

<style>

</style>
