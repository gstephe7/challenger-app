<template>
  <div class="container">

    <div class="navbar container">
      <div class="row">
        <div class="col-xs-8">
          <h1 class="logo">Challenger</h1>
        </div>
        <div class="col-xs-4">
          <button class="nav-btn pull-right" v-on:click="displayMenu()"><i class="fa fa-bars"></i></button>
        </div>
      </div>
    </div>

    <div class="menu container" v-bind:class="{ showMenu : showMenu }">
      <div class="row">
        <div class="col-xs-12">
          <ul class="pull-right">
            <li class="menu-item text-right">
              <a class="menu-item" v-text="nav.profile.name"></a>
            </li>
            <li class="menu-item text-right">
              <a class="menu-item" v-text="nav.myChallenges.name"></a>
            </li>
            <li class="menu-item text-right">
              <a class="menu-item" v-text="nav.acceptedChallenges.name"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data: function () {
      return {
        showMenu: false,
        nav: {
          profile: {
            name: 'My Profile'
          },
          myChallenges: {
            name: 'My Challenges'
          },
          acceptedChallenges: {
            name: 'Accepted Challenges'
          }
        }
      }
    },
    methods: {
      displayMenu: function () {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<style>
  .navbar {
    position: fixed;
    width: 100vw;
    height: 70px;
    box-shadow: 2px 2px lightgrey;
    z-index: 1000;
    overflow: hidden;
    background-color: white;
  }

  i {
    color: rgba(206, 198, 105, 1);
  }

  .nav-btn {
    height: 40px;
    width: 40px;
    background-color: white;
    border-color: rgba(206, 198, 105, 1);
    border-radius: 5px;
    margin: 15px 20px 0px 0px;
  }

  .logo {
    font-family: impact;
    color: rgba(206, 198, 105, 1);
    margin: 15px 0px 0px 15px;
    font-style: italic;
  }

  .menu {
    position: fixed;
    height: 0px;
    margin-top: 70px;
    opacity: 0;
    z-index: 500;
    overflow: hidden;
    width: 100vw;
    background-color: white;
    transition: 500ms all;
  }

  .showMenu {
    height: 100px;
    opacity: .8;
  }

  .menu-item {
    list-style-type: none;
    color: rgba(206, 198, 105, 1);
    font-size: 20px;
    margin: 5px 10px 0 0;
  }
</style>
