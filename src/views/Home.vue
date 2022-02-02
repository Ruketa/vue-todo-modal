<template>
  <div class="main">
    <Modal v-if="modalVisible" @updateModalViewVisible="toggleModalVisible" />
    <button @click="toggleModalVisible">show modal</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "@/views/Modal.vue"

export default defineComponent({
  name: "Home",
  components: {
    Modal
  },
  setup(){
    const modalVisible = ref(false)
    const toggleModalVisible = () => {
      modalVisible.value = !modalVisible.value
    }
    return {
      modalVisible,
      toggleModalVisible
    }
  }
}) 
</script>

<style scoped>
.main{
  width: 100vw;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>