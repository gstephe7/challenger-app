<template>
  <div class="container">

    <mobile-navbar></mobile-navbar>

    <div class="col-sm-9 col-xs-12">
      <create-challenge v-bind:challenges="challenges"></create-challenge>
      <random-challenge
        v-bind:challenges="challenges"
        v-bind:randomChallenge="randomChallenge" v-on:generateChallenge="generateChallenge" v-bind:myChallenges="profile.myChallenges">
      </random-challenge>
      <completed-challenge
        v-bind:randomVideo="randomVideo"
        v-on:generateVideo="generateVideo">
      </completed-challenge>
    </div>

    <div class="col-sm-3 hidden-xs">
      <profile-sidebar
        v-bind:pic="profile.pic"
        v-bind:name="profile.name"
        v-bind:points="profile.points" v-bind:challengesCompleted="profile.challengesCompleted">
      </profile-sidebar>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      profile: {
        name: 'Greg',
        pic: '../static/img/profilepic.jpg',
        points: 1099,
        challengesCompleted: 500,
        myChallenges: []
      },
      challenges: ['greg'],
      randomChallenge: '',
      completedChallenges: [
        { src: '../static/video/dance.mp4' },
        { src: '../static/video/rush.mp4' },
        { src: '../static/video/soccer.mp4' }
      ],
      randomVideo: ''
    }
  },
  methods: {
    generateChallenge: function () {
      this.randomChallenge = this.challenges[Math.floor(Math.random() * this.challenges.length)]
      console.log(this.randomChallenge)
    },
    generateVideo: function () {
      this.randomVideo = this.completedChallenges[Math.floor(Math.random() * this.completedChallenges.length)].src
      console.log(this.randomVideo)
    }
  }
}
</script>

<style>
html, body, .container {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(242, 242, 242, 1);
}

.section {
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px lightgrey;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>
