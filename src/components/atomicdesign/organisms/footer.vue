<template>
  <FooterMenu
    @clickCancel="handleClickCancel"
    @clickSubmit="handleClickSubmit"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterMenu from "../molecues/footermenu.vue"

export default defineComponent({
  name: "Footer",
  components: {
    FooterMenu
  },
  emits: ["clickCancel", "clickSubmit"],
  setup(props, context){

    // キャンセルボタン押した時のイベントハンドラ
    const handleClickCancel = () => {
      context.emit("clickCancel")  
    }

    // OKボタン押した時のイベントハンドラ
    const handleClickSubmit = () => {
      context.emit("clickSubmit")
    }

    return {
      handleClickCancel,
      handleClickSubmit,
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