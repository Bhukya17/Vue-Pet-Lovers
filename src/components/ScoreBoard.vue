<template>
  <div class="scrolling-component" ref="scrollComponent">
    <table>
      <tr>
        <th>Image Name</th>
        <th>Image</th>
        <th>Rate</th>
        <th>Cute-or-Not</th>
      </tr>
      <tr v-for="(pet, index) in petDetails" :key="index">
        <td>{{ pet.urlName }}</td>
        <td style="width: 30%">
          <img :src="pet.url" />
          <!-- {{pet.url}} -->
        </td>
        <td>{{ pet.ratingValue }}</td>
        <td v-if="pet.ratingValue > 2">Cute</td>
        <td v-else>Not cute</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { toRefs } from "vue";

export default {
  name: "ScoreBoard",
  props: {
    petDetails: Array,
  },
  setup(props) {
    //  console.log("props", props.petDetails);
    //    const getPets = computed((start, step) => {
    //   return props.petDetails.slice(start, start + step);
    // });
    const getPets = (start, step) => {
      return props.petDetails.slice(start, start + step);
    };
    const pets = ref(getPets(0, 5));
    const scrollComponent = ref(null);
    const loadMorePosts = () => {
      let newPets = getPets(pets.value.length, 5);
      pets.value.push(...newPets);
    };
  
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = (e) => {
      let element = scrollComponent.value;
      // console.log(element.getBoundingClientRect().bottom, window.innerHeight);
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePosts();
      }
    };

    return {
      pets,
      scrollComponent,
    };
  },
};
</script>

<style>
img {
  margin-top: 5px;
  max-width: 50%;
  max-height: 500px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin: auto;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
