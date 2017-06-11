<template>
  <div class="completed-div container">

    <div class="section container">
      <div class="row">
        <div class="col-xs-12">
          <h4 class="section-title">Completed Challenges</h4>
        </div>
      </div>
    </div>

    <div class="section container">
      <div class="row">
        <div class="col-xs-12">
          <video class="center-block" width="300px" height="300px" controls autoplay loop>
            <source v-bind:src="currentVideo" type="video/mp4">
          </video>
        </div>
      </div>
    </div>

    <div class="section container">
      <div class="row">
        <div class="col-xs-4">
          <button v-on:click="downVote()"><i class="fa fa-thumbs-down"></i></button>
        </div>
        <div class="col-xs-4">
          <button class="center-block" v-on:click="upVote()"><i class="fa fa-thumbs-up"></i></button>
        </div>
        <div class="col-xs-4">
          <button class="pull-right" v-on:click="nextVideo()">NEXT</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    props: ['randomVideo'],
    data: function () {
      return {
        currentVideo: this.randomVideo
      }
    },
    methods: {
      nextVideo: function () {
        this.$emit('generateVideo')
      }
    }
  }
</script>

<style>
  .completed-div {
    margin-top: 10px;
    background-color: white;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px lightgrey;
    padding: 10px;
  }
</style>
