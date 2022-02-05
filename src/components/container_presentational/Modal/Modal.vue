<script lang="ts">
import { defineComponent, h } from "vue";
import { useModal, todoData } from "./useModal"

import ModalPresentational from "@/views/Modal/ModalPresentational.vue"

export default defineComponent({
  name : "Modal",
  setup( _, context ){
    const modal = useModal()
    
    const handleChangeRadio = (event: any) => {
      modal.selected.value = event.target.value
      const option = modal.slopeOptions.find((opt: todoData) => opt.value === Number(event.target.value))
      if (option) {
        modal.selectedOption.value = option
      }
    }

    // ×ボタン押した時のイベントハンドラ
    const handleClickClose = () => {
      context.emit("updateModalViewVisible", false)  
    }

    // キャンセルボタン押した時のイベントハンドラ
    const handleClickCancel = () => {
      handleClickClose()
    }

    // OKボタン押した時のイベントハンドラ
    const handleClickSubmit = () => {
      const option = modal.slopeOptions.find((opt: todoData) => opt.value === Number(modal.selected.value))
      context.emit("updateSelectedSlope", option)
    }

    return {
      selected: modal.selected,
      slopeOptions: modal.slopeOptions,
      selectedOption: modal.selectedOption,

      radioStyle: modal.radioStyle,
      handleClickClose,
      handleClickCancel,
      handleClickSubmit,
      handleChangeRadio,
    }
  },

  render(){
    return h(ModalPresentational, {
      selected: this.selected,
      slopeOptions: this.slopeOptions,
      selectedOption: this.selectedOption,

      radioStyle: this.radioStyle,
      handleClickClose: this.handleClickClose,
      handleClickCancel: this.handleClickCancel,
      handleClickSubmit: this.handleClickSubmit,
      handleChangeRadio: this.handleChangeRadio
    })
  }
})
</script>