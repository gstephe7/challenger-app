<template>

  <div class="cc-div container">

    <div class="section container">
      <div class="row">
        <div class="col-xs-12">
          <h4 class="section-title">Create a Challenge</h4>
        </div>
      </div>
    </div>

    <div class="section container">
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <textarea class="create-challenge center-block" type="text" placeholder="Create a Challenge (ex: Eat 20 Bananas in 4 minutes)" v-model="newChallenge" v-on:keyup.enter="addChallenge()"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <button class="cc-btn center-block" v-on:click="addChallenge()"><i class="fa fa-bolt"></i></button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    props: ['challenges'],
    data: function () {
      return {
        newChallenge: ''
      }
    },
    methods: {
      addChallenge: function () {
        if (this.newChallenge) {
          this.challenges.push(this.newChallenge)
          this.newChallenge = ''
        }
      }
    }
  }
</script>

<style>
  .cc-div {
    margin-top: 80px;
    background-color: white;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px lightgrey;
    padding: 10px;
  }

  .create-challenge {
    border-radius: 5px;
    height: 100px;
    width: 100%;
    max-width: 500px;
  }

  .cc-btn {
    background-color: white;
    border-color: rgba(206, 198, 105, 1);
    border-radius: 5px;
    height: 30px;
    width: 80px;
    margin-top: 5px;
  }

  .section-title {
    margin-bottom: 15px;
  }
</style>
