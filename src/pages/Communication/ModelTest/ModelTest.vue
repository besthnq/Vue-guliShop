<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="name1" />
    <span>{{ name1 }}</span>
    <br />

    <input type="text" :value="name2" @input="name2 = $event.target.value" />
    <span>{{ name2 }}</span>
    <br />

    <CustomInput :value="name3" @input="name3=$event"/>
  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from './CustomInput.vue'
export default {
  name: 'ModelTest',
  data(){
    return {
      name1:"111111",
      name2:"222222",
      name3:'333333'
    }
  },
  components: {
    CustomInput
  }
}
</script>
