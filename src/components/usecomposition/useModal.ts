import { reactive, ref, computed, Ref, WritableComputedRef } from "vue"

// todoデータタイプ
type todoData = {
  value: number,
  label: string,
  cost: number 
}

// 出力データタイプ
export type useModalResult = {
  radioStyle: (value: string) => string,
  selected: Ref<string>,
  selectedOption: Ref<todoData>
  selectComputed: WritableComputedRef<string>,
  slopeOptions: Array<todoData>,

}

export const useModal = (): useModalResult => {
  // ラジオボタンスタイル
  const radioStyle = (value: string): string => {
    let style = "modal__main__radio"
    if (value === selected.value) {
      style = style + " radio__checked"
    }
    console.log(style)
    return style
  }

  // Radioボタンの選択中データ
  const selected = ref<string>("");
  const selectedOption = ref<todoData>({
    value: -1,
    label: "",
    cost: 0
  })
  const selectComputed = computed({
    get: () => selected.value,
    set: (value: string) => {
      selected.value = value
      const option = slopeOptions.find((opt) => opt.value === Number(value))
      if (option) {
        selectedOption.value = option
      }
      console.log(value)
    }
  })
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
    selectComputed,
    slopeOptions,
  }
}