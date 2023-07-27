<template>
  <div id="nav">
    <router-link to="/">
   
    <h1> <font-awesome-icon icon="paw"/> Pet Lovers</h1></router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding-top: 30px; */
}

#nav a {
  /* font-size: 30px; */
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #000;
}
</style>
