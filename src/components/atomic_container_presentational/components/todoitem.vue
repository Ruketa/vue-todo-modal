<template>
  <div>
    <input type="radio" name="slope" :value="item.value" @change="handleChangeRadio" />
    <label>{{item.label}}</label>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
  name: "TodoList",
  props:{
    item:{
      type: Object,
      require: true
    },
    handleChangeRadio: {
      type: Function,
      require: true
    },
    radioStyle: {
      type: Function,
      require: true
    }
  }
})
</script>