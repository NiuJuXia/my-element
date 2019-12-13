<template>
  <div id="app">
    <el-button type="primary" :loading="true" @click="buttonClick">主要按钮</el-button>
    <mybutton type="primary" >凄凄切切群主要按钮</mybutton>
    <button id='qwer'  @click="buttonClic">原生</button>
    <a id='a1' href="">789</a>
    <vuetry></vuetry>
  </div>
</template>

<script>
import mybutton from './components/button/button'
import vuetry from './components/try/try'

export default {
  data () {
    return {
      obj: ''
    }
  },
  methods: {
    buttonClick (qw) {
      console.log(qw.button)
    },
    buttonClic () {
      console.log('元素')
    }
  },
  mounted () {
    if (this.obj.name) {
      console.log('name')
    }
    console.log('qwer')
  },
  components: {
    mybutton,
    vuetry
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
#qwer {
  display: inline-block;
   position: relative;
    pointer-events: none;

    &:before {
      pointer-events: none;
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: rgba(255,255,255,.35);
    }
}
#a1 {
  user-select:none
}
</style>
