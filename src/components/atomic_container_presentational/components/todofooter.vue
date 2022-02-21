<template>
  <div class="modal__footer">
    <button class="modal__footer__button" @click="handleClickCancel">キャンセル</button>
    <button class="modal__footer__button" theme="primary" @click="handleClickSubmit">決定</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoFooter",
  props: {
    handleClickCancel: {
      type: Function,
      required: true
    },
    handleClickSubmit: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>

.modal__footer{
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px 12px;
  border-top: solid 1px #ddd;
}

.modal__footer__button{
  margin-left: 8px
}

</style>