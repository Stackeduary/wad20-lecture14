<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Today/>
    <Users :users="users"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Today from './components/Today.vue'
import Users from './components/Users.vue'

export default {
  name: 'App',
  data: function () {
    return {
        users: [
            {name: "John Doe", age: 21},
            {name: "Jake Appleseed", age: 30},
            {name: "Foo Bar", age: 67},
        ]
    }
  },
  components: {
    HelloWorld,
    Today,
    Users,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
