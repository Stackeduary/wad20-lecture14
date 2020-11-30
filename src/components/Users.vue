<template>
  <div class="hello">
    <h1>Users:</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{user.name}} is {{user.age}} years old
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
    users: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
