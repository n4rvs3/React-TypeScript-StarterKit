import React, { VFC, useState, } from "react";

import { InputField } from './components/InputField'
import { Counter } from "./components/Counter";

const Top: VFC = () => {
  const [text, setText] = useState("React")

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