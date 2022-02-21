<template>
  <h3>{{todoItem.label}}のコストは{{todoItem.cost}}です</h3>
</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
  name: "TodoList",
  props:{
    todoItem: {
      type: Object,
      require: true
    },
  }
})
</script>