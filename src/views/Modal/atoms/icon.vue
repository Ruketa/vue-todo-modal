<template>
  <img :src=src class="modal__header__close" @click="handleClick"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(props, context){

    // ×ボタン押した時のイベントハンドラ
    const handleClick = () => {
      context.emit("clickIcon")
    }

    return {
      handleClick,
    }
  }
}) 
</script>

<style scoped>

.modal__header__close{
  width: 16px;
  height: 16px;
}

</style>