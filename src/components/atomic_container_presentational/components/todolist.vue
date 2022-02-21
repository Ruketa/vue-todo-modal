<template>
  <div v-for="item in todoItems" :key="item">
    <div :class="radioStyle(item.value)">
      <TodoItem :item="item" :handleChangeRadio="handleChangeRadio" />
    </div>
  </div>
  <div v-if="selectedItem.value >= 0">
    <TodoDescription :todoItem="selectedItem" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"
import TodoItem from "@/views/Modal/components/todoitem.vue"
import TodoDescription from "@/views/Modal/components/tododescription.vue"

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem, TodoDescription
  },
  props:{
    todoItems: {
      type: Array,
      require: true
    },
    selectedItem: {
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

<style scoped>

.modal__main__radio{
  display: flex;
  justify-content: flex-start;
  border: solid 1px #aaa;
  border-radius: 4px;
  padding: 16px;
  margin-top: 12px;
}

.radio__checked{
  color:#eee;
  font-weight: bold;
  background-color: #42b983;
}

</style>