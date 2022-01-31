<template>
  <div>
    <Modal/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/views/Modal.vue"

export default defineComponent({
  name: "Home",
  components: {
    Modal
  },
  setup(){
    return {}
  }
}) 
</script>
