<template>
  <div class="overlay">
    <div class="modal">
      <TodoHeader title="次のタスクを選ぼう" :handleClickClose="handleClickClose"/>
      <div class="modal__main">
        <TodoList :todoItems="slopeOptions" :selectedItem="selectedOption" :radioStyle="radioStyle" :handleChangeRadio="handleChangeRadio"/>
      </div>
      <TodoFooter :handleClickCancel="handleClickCancel" :handleClickSubmit="handleClickSubmit" />
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoHeader from "@/views/Modal/components/todoheader.vue"
import TodoFooter from "@/views/Modal/components/todofooter.vue"
import TodoList from "@/views/Modal/components/todolist.vue"

export default defineComponent({
  name: "ModalView",
  components: {
    TodoHeader, TodoList, TodoFooter
  },
  props: {
    selected: {
      type: String,
      required: true,
    },
    slopeOptions: {
      type: Array,
      required: true
    },
    selectedOption: {
      type: Object,
      required: true
    },
    radioStyle: {
      type: Function,
      required: true
    },
    handleClickClose: {
      type: Function,
      required: true
    },
    handleClickCancel: {
      type: Function,
      required: true
    },
    handleClickSubmit:{
      true: Function,
      required: true
    },
    handleChangeRadio: {
      true: Function,
      required: true
    }
  },
}) 
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.3)
}

.modal{
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  max-height: 640px;
  height: 100%;
  border: solid #aaa;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
}

.modal__main{
  height: 100%;
  padding: 16px;
}

</style>