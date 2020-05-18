<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试绑定原生DOM事件监听</button>
    <button @click="test2($event)">测试绑定原生DOM事件监听</button>
    <Event1 @click.native="test2" />
    <Event2 @click="test3" />
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

export default {
  name: 'EventTest',

  components: {
    Event1,
    Event2,
  },

  methods: {
   test1(){
     alert("test1");

   },
   test2(event){
     alert(event.target.innerHTML)
   },
   test3(data){
     alert(data)
   },

  }
}
</script>
