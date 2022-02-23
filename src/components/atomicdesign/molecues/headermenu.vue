<template>
  <headertitle class="modal__header__title">
    次のタスクを選ぼう
  </headertitle>
  <cancelicon src="close.png"  @clickIcon="handleClickClose"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headertitle from "../atoms/title.vue"
import cancelicon from "../atoms/icon.vue"

export default defineComponent({
  name: "HeaderMenu",
  components: {
    headertitle,
    cancelicon
  },
  emits:["clickClose"],
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

</style>