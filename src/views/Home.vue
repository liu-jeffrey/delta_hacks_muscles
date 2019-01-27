<template>
  <div id="welcome">
    <h1>Welcome to Move</h1>
    <h3>Move helps the average person visualize the muscles
      <br>exercised in a workout overtime.
    </h3>
    <router-link to="/login" id="get started">get started</router-link>
    <!-- <button id="get started" onclick="router.push(/about)">get started</button> -->
  </div>
</template>

<script>
// import particlesJS from "particles.js";

export default {
  name: "home"
  //   props: {
  //     msg: String
  //   }
};
</script>

<style style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#welcome {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

h1 {
  opacity: 0;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

h3 {
  opacity: 0;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
}

#get\ started {
  align-content: center;
  text-align: center;
  font-size: 20px;
  background-color: green;
  border: none;
  color: white;
  padding: 15px 25px;
  border-radius: 4px;
  width: 200px;
  opacity: 0;
  margin-top: 20px;
  text-decoration: none;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

#get\ started:hover {
  background-color: darkgreen;
}
</style>
