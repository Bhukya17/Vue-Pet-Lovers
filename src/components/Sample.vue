<template>
  <div class="scrolling-component" ref="scrollComponent">
    <table>
      <tr>
        <th>Image Name</th>
        <th>Image</th>
        <th>Rate</th>
        <th>Cute-or-Not{{petDetails}}</th>
      </tr>
      <tr v-for="(pet, index) in pets" :key="index">
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


export default {
  name: "Sample",
  props: {
    petDetails: Array,
  },
   data() {
    return {
    data:this.petDetails,
      pets: [],
    };
  },
  watch: {
    console.log("hjhj",props.petDetails);
  },
  methods: {
    getNextUser() {
        console.log("jkj",this.petDetails);
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
            this.pets.push(this.petDetails);
        }
      }
    }
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
