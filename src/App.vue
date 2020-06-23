<template>
  <div id="app">
    el
    <button @click='qwer'>qwer</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      obj: ''
    }
  },
  methods: {
    qwer () {
      axios.get('http://mockjs').then((res) => {
        console.log(res)
      })
    }
  },
  components: {
  },
  mounted () {
    console.log(12)
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  left: 50px;
  top: 50px;
  width: 500px;
  height: 350px;
  border: 1px orange solid;
}

</style>
