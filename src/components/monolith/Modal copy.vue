<template>
  <div class="overlay">
    <div class="modal">
      <div class="modal__header">
        <h2 class="modal__header__title">
          次のタスクを選ぼう
        </h2>
        <img src="@/assets/close.png" class="modal__header__close" @click="handleClickClose"/>
    </div>
    <div class="modal__main">
      <div v-for="slopeOption in slopeOptions" :key="slopeOption">
        <div :class="radio_style(slopeOption.value)">
          <input type="radio" name="slope" :value="slopeOption.value" v-model="selectComputed"/>
          <label>{{slopeOption.label}}</label>
        </div>
      </div>
      <div>
        <h3 v-if="selectedOption.value >= 0">{{selectedOption.label}}のコストは{{selectedOption.cost}}です</h3>
      </div>
    </div>
    <div class="modal__footer">
       <button class="modal__footer__button" @click="handleClickCancel">キャンセル</button>
       <button class="modal__footer__button" theme="primary" @click="handleClickSubmit">決定</button>
    </div>
   </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
  name: "Modal",
  setup(props, context){

    // ラジオボタンスタイル
    const radio_style = (slopeValue: string) => {
      let style = "modal__main__radio"
      if(slopeValue === selected.value){
        style = style + " radio__checked"
      }
      return style
    } 

    // Radioボタンの選択中データ
    const selected= ref("");
    const selectedOption = ref({})
    const selectComputed  = computed({
      get: () => selected.value,
      set: (value: string) => { 
          selected.value = value 
          const option = slopeOptions.find((opt)=>opt.value === Number(value))
          if(option){
            selectedOption.value = option 
          }
        }
    })
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
      selectComputed,
      slopeOptions,
      selectedOption,
      
      radio_style,
      handleClickClose,
      handleClickCancel,
      handleClickSubmit,
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
  height: 100vw;
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

.modal__main{
  height: 100%;
  padding: 16px;
}

.modal__main__radio{
  display: flex;
  justify-content: flex-start;
  border: solid 1px #aaa;
  border-radius: 4px;
  padding: 16px;
  margin-top: 12px;
}

.radio__checked{
  color:#eee;
  font-weight: bold;
  background-color: #42b983;
}


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