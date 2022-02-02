import { reactive, ref, computed, Ref } from "vue"

type useModalResult = {
  radioStyle: string,
  selected: Ref<string>,
}

export const useModal = () => {
  // ラジオボタンスタイル
  const radio_style = (slopeValue: string) => {
    let style = "modal__main__radio"
    if (slopeValue === selected.value) {
      style = style + " radio__checked"
    }
    return style
  }

  // Radioボタンの選択中データ
  const selected = ref("");
  const selectedOption = ref({})
  const selectComputed = computed({
    get: () => selected.value,
    set: (value: string) => {
      selected.value = value
      const option = slopeOptions.find((opt) => opt.value === Number(value))
      if (option) {
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
      cost: 50
    },
  ])

  // ×ボタン押した時のイベントハンドラ
  const handleClickClose = () => {
    //context.emit("updateModalViewVisible", false)
  }

  // キャンセルボタン押した時のイベントハンドラ
  const handleClickCancel = () => {
    handleClickClose()
  }

  // OKボタン押した時のイベントハンドラ
  const handleClickSubmit = () => {
    const option = slopeOptions.find((opt) => opt.value === Number(selected.value))
    //context.emit("updateSelectedSlope", option)
  }


}