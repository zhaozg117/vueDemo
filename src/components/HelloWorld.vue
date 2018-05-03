<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>parent: {{num}}</span>
    <child v-bind:num="num"  v-on:incre='incrent'></child>
  </div>
</template>

<script>
import child from "./childComponent";
export default {
  name:'HelloWorld',
  data () {
    return {
      num:5,
      msg:'Welcome to Your Vue.js App'
    }
  },
  components:{
    child,
  },
  methods:{
    incrent:function(){
      this.num++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
