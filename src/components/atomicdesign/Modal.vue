<template>
  <div class="overlay">
    <div class="modal">
      <modalheader
        @clickClose="handleClickClose"
      />
      <todolist :slopeOptions="slopeOptions" @changeTodo="handleChangeRadio"/>
      <div>
        <h3 v-if="selectedOption.value >= 0">{{selectedOption.label}}のコストは{{selectedOption.cost}}です</h3>
      </div>
      <modalfooter
        @clickCancel="handleClickCancel"
        @clickSubmit="handleClickSubmit"
      />
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import modalfooter from "./organisms/footer.vue"
import modalheader from "./organisms/header.vue"
import todolist from "./organisms/todolist.vue"

export default defineComponent({
  name: "Modal",
  components: {
    modalfooter,
    modalheader,
    todolist,
  },
  setup(props, context){

    // Radioボタンの選択中データ
    const selected= ref("");
    const selectedOption = ref({})

    const handleChangeRadio = (value: string) => {
      selected.value = value
      const option = slopeOptions.find((opt)=>opt.value === Number(value))
      if(option){
        selectedOption.value = option 
      }
    }

    // オプションデータ
    const slopeOptions = reactive([
      {
        value: 0,
        label: "要件定義",
        cost: 10
      },
      {
        value: 1,
        label: "論理設計",
        cost: 20
      },
      {
        value: 2,
        label: "物理設計",
        cost: 30
      },
      {
        value: 3,
        label: "プログラム",
        cost: 40
      },
      {
        value: 4,
        label: "テスト",
        cost : 50
      },
    ])

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
      const option = slopeOptions.find((opt) => opt.value === Number(selected.value))
      context.emit("updateSelectedSlope", option)
    }

    return {
      selected,
      slopeOptions,
      selectedOption,
      
      handleClickClose,
      handleClickCancel,
      handleClickSubmit,
      handleChangeRadio,
    }
  }
}) 
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.3)
}

.modal{
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  max-height: 640px;
  height: 100%;
  border: solid #aaa;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
}

.modal__main{
  height: 100%;
  padding: 16px;
}

</style>