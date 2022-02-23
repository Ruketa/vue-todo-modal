<template>
  <div v-for="slopeOption in slopeOptions" :key="slopeOption">
    <div :class="radio_style(slopeOption.value)">
      <input type="radio" name="slope" :value="slopeOption.value" v-model="selectComputed"/>
      <label>{{slopeOption.label}}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    slopeOptions: {
      type: Array,
      required: true,
    }
  },
  emits:["changeTodo"],
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
    const selectComputed  = computed({
      get: () => selected.value,
      set: (value: string) => { 
        selected.value = value 
        context.emit("changeTodo", value)
      }
    })

    return {
      selected,
      selectComputed,
      
      radio_style,
    }
  }
}) 
</script>

<style scoped>
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
</style>