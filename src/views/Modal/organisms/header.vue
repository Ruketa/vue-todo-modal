<template>
  <div class="modal__header">
    <headermenu @clickClose="handleClickClose"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headermenu from "../molecues/headermenu.vue";

export default defineComponent({
  name: "ModalHeader",
  components:{
    headermenu
  },
  setup(_, context){

    // ×ボタン押した時のイベントハンドラ
    const handleClickClose = () => {
      context.emit("clickClose")
    }

    return {
      handleClickClose,
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