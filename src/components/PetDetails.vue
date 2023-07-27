<template>
  <div id="app">
    <div id="details-container">
      <div class="uploadImage">
        <div>
          <div>
            <span> Upload pet image </span>
          </div>
          <div class="file-container">
            <input type="file" @change="onFileChange" ref="file" />
          </div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <span> Rate image out of 5</span>
      </div>
      <Star v-on:listenerChild="listenerChild"></Star>
      <div class="submit">
        <button
          :class="{ disabledButton: isDisableButton }"
          :disabled="isDisableButton"
          @click="onSubmit"
        >
          Submit
        </button>
      </div>
    </div>
     <!-- <Sample v-if="petDetails.length" :petDetails="petDetails"></Sample> -->
    <div id="preview">
      <img v-if="url" :src="url" />
    </div>
  </div>
 
  <ScoreBoard v-if="petDetails.length" :petDetails="petDetails"></ScoreBoard>
</template>

<script>
import ScoreBoard from "./ScoreBoard.vue";
import Star from "./StarRating.vue";
// import Sample from "./Sample.vue";
export default {
  name: "PetDetails",
  components: {
    ScoreBoard,
    Star,
    // Sample
  },
  data() {
    return {
      url: null,
      urlName: "",
      ratingValue: "",
      image:require('../assets/dog.jpeg'),
        petDetails: [],
      isDisableButton: true,
      isDisableTable: true,
    };
  },
  methods: {
    onSubmit() {
      if (this.urlName === "" || this.url === "" || this.ratingValue === null) {
        alert("Please select every field.");
        return;
      }
      let pet = {
        url: this.url,
        urlName: this.urlName,
        ratingValue: this.ratingValue,
      };
     console.log("pet", pet);
      this.petDetails.push(pet);
      console.log("petDetails", this.petDetails);
      this.isDisableButton = true;
      this.isDisableTable = false;
      this.url = "";
      this.urlName = "";
      // this.ratingValue = null;
      this.$refs.file.value = "";
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.urlName = e.target.files[0].name;
      this.url = URL.createObjectURL(file);
      this.isDisableButton = false;

      var exists = this.petDetails.filter((file) => file.urlName === this.urlName);
      if (exists.length > 0) {
        alert("Imange already exists");
      }
    },
    listenerChild(reply) {
      this.ratingValue = reply;
    },
  },
};
</script>
<style scoped>
body {
  background-color: #e2e2e2;
}

#details-container {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
#app {
  display: flex;
  flex-direction: row;
}
.disabledButton {
  background-color: #red;
  cursor: not-allowed;
}
.uploadImage {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 10px;
}
.file-container {
  margin-top: 20px;
  margin-left: 30%;
}
.span {
  font-size: 20px;
}

#preview {
  /* margin: 20px;
  max-width: 50%;
  max-height: 500px; */
  /* display: flex;
  flex-direction: column;
   margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-right: 50px;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

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

.uploadImage input {
  color: transparent !important;
  font-size: 19px;
}

/* input[type="file"]::before {
  color: black;
  font-size: 20px;
  margin-right: 10px;
} */
.submit {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.submit Button {
  font-size: 20px;
  border: 1px solid #000;
  background-color: #000;
  color: white;
  border-radius: 30px;
  padding: 10px;
}
</style>
