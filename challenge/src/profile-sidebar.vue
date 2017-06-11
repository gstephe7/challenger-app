<template>

  <div class="sidebar container">
    <div class="row">
      <div class="col-xs-12">
        <img class="sidebar-pic img-rounded" v-bind:src="pic">
        <p class="sidebar-text" v-text="name"></p>
        <p class="sidebar-text">Points: {{ points }}</p>
        <p class="sidebar-text">Challenges Completed: {{ challengesCompleted }}</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['pic', 'name', 'points', 'challengesCompleted']
  }
</script>

<style>
  .sidebar {
    margin-top: 80px;
    background-color: white;
    height: 100vh;
    border-radius: 5px;
    box-shadow: -2px 2px lightgrey;
  }

  .sidebar-pic {
    width: 100px;
    margin: 20px;
  }

  .sidebar-text {
    margin-left: 20px;
  }
</style>
