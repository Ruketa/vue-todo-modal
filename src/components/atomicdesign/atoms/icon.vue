<template>
  <img :src="loadImage()" class="modal__header__close" @click="handleClick"/>
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
  emits: ["clickIcon"],
  setup(props, context){

    // ×ボタン押した時のイベントハンドラ
    const handleClick = () => {
      context.emit("clickIcon")
    }

    const loadImage = () => {
      return require("@/assets/" + props.src)
    }

    return {
      handleClick,
      loadImage
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