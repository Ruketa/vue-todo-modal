<template>
  <div class="modal__header">
    <h2 class="modal__header__title">
      次のタスクを選ぼう
    </h2>
    <img src="@/assets/close.png" class="modal__header__close" @click="handleClickClose"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoHeader",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    handleClickClose: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>

.modal__header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #eee;
  background-color: #ebf5fe;
  padding: 16px 16px 12px;
}

.modal__header__close{
  width: 16px;
  height: 16px;
}

</style>