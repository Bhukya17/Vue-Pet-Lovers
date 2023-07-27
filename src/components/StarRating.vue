<template>
  <div class="star-rating">
        <input type="radio" id="5-stars" name="rating" value="5" @click="rating" />
        <label for="5-stars" class="star">&#9733;</label>
        <input type="radio" id="4-stars" name="rating" value="4" @click="rating" />
        <label for="4-stars" class="star">&#9733;</label>
        <input type="radio" id="3-stars" name="rating" value="3" @click="rating" />
        <label for="3-stars" class="star">&#9733;</label>
        <input type="radio" id="2-stars" name="rating" value="2" @click="rating" />
        <label for="2-stars" class="star">&#9733;</label>
        <input type="radio" id="1-star" name="rating" value="1" @click="rating" />
        <label for="1-star" class="star">&#9733;</label>
      </div>
      <div>
      <span>{{this.starValue}}</span>
      </div>
</template>

<script>
import PetDetails from "@/components/PetDetails.vue";

export default {
  name: "Star",
  data(){
    return{
    starValue:"",
    }
  },
  methods:{ 
   rating(e) {
    this.$emit("listenerChild", e.target.value);
    this.starValue= e.target.value;
    },
  },

};
</script>

<style>
.star-rating {
  /* display: flex;
  flex-direction: row;
  margin: auto;
  padding: 10px; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: auto;
  /* width: 30%; */
  padding: 10px;
}

.star-rating input {
  display: none;
}

.star-rating label {
  color: #ccc;
  cursor: pointer;
  font-size: 50px;
}

.star-rating :checked ~ label {
  color: #f90;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  color: #fc0;
}
</style>