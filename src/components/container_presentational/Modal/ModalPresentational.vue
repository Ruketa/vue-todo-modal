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
        <div :class="radioStyle(slopeOption.value)">
          <input type="radio" name="slope" :value="slopeOption.value" @change="handleChangeRadio" />
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalView",
  props: {
    selected: {
      type: String,
      required: true,
    },
    slopeOptions: {
      type: Array,
      required: true
    },
    selectedOption: {
      type: Object,
      required: true
    },
    radioStyle: {
      type: Function,
      required: true
    },
    handleClickClose: {
      type: Function,
      required: true
    },
    handleClickCancel: {
      type: Function,
      required: true
    },
    handleClickSubmit:{
      true: Function,
      required: true
    },
    handleChangeRadio: {
      true: Function,
      required: true
    }
  },
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