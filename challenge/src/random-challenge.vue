<template>

  <div class="random-div container">

    <div class="section container">
      <div class="row">
        <div class="col-xs-12">
          <h4 class="section-title">Random Challenges</h4>
        </div>
      </div>
    </div>

    <div class="section current-challenge container">
      <div class="row">
        <div class="col-xs-12">
          <p v-text="randomChallenge"></p>
        </div>
      </div>
    </div>

    <div class="section container">
      <div class="row">
        <div class="col-xs-3">
          <button class="skip-btn" v-on:click="skipChallenge()">SKIP</button>
        </div>
        <div class="col-xs-3">
          <button v-on:click="downVote()"><i class="fa fa-thumbs-down"></i></button>
        </div>
        <div class="col-xs-3">
          <button class="pull-right" v-on:click="upVote()"><i class="fa fa-thumbs-up"></i></button>
        </div>
        <div class="col-xs-3">
          <button class="accept-btn pull-right" v-on:click="acceptChallenge()">TAKE</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    props: ['challenges', 'randomChallenge', 'myChallenges'],
    methods: {
      acceptChallenge: function () {
        this.myChallenges.push(this.randomChallenge)
      },
      skipChallenge: function () {
        this.$emit('generateChallenge')
      },
      upVote: function () {
        console.log('upvote')
      },
      downVote: function () {
        console.log('downVote')
      }
    }
  }
</script>

<style>
  .random-div {
    margin-top: 10px;
    background-color: white;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px lightgrey;
    padding: 10px;
  }

  .current-challenge {
    height: 100px;
  }

  button {
    background-color: white;
    width: 65px;
    border-radius: 5px;
  }

  .skip-btn {
    color: red;
  }

  .accept-btn {
    color: green;
  }
</style>
