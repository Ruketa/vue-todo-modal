import { reactive, ref, computed, Ref, WritableComputedRef } from "vue"

// todoデータタイプ
export type todoData = {
  value: number,
  label: string,
  cost: number 
}

// 出力データタイプ
export type useModalResult = {
  radioStyle: (value: number) => string,
  selected: Ref<string>,
  selectedOption: Ref<todoData>
  slopeOptions: Array<todoData>,
}

export const useModal = (): useModalResult => {
  // Radioボタンの選択中データ
  const selected = ref<string>("");
  const selectedOption = ref<todoData>({
    value: -1,
    label: "",
    cost: 0
  })

  // ラジオボタンスタイル
  const radioStyle = (value: number): string => {
    let style = "modal__main__radio"
    if(!selected.value){
      return style
    }
    if (value === Number(selected.value)) {
      style = style + " radio__checked"
    }
    return style
  }

  // オプションデータ
  const slopeOptions = reactive<Array<todoData>>([
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
      cost: 50
    },
  ])

  return {
    radioStyle,
    selected,
    selectedOption,
    slopeOptions,
  }
}