import React, { VFC, useState, } from "react";

// コンポーネントの読み込み
import { InputField } from './components/InputField'
import { Counter } from "./components/Counter";

const Top: VFC = () => {
  // VFCはReactで関数コンポーネントを定義するための型

  const [text, setText] = useState("React")
  /**
   * textはただの定数、setTextはtextの値を更新する為の専用関数
   * プリミティブ値の型定義は型推論に任せる。明示的に定義しなくて良い(してもいい)
   */

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-red-400 text-3xl tracking-wide underline underline-offset-8">Hello {text}</h1>
      <InputField placeholder={text} onChange={e => handleChangeText(e)} />
      <Counter />
    </div>
  )
}

export default Top