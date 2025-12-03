import { useState } from "react"
import { useRef, useEffect } from "react"

export default function AutoFocusInput() {
  // TODO: useRef로 input 엘리먼트를 참조하세요.
  const inputRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // TODO: 컴포넌트가 처음 렌더링될 때 input에 포커스 주세요.
    inputRef.current.focus()
  }, [count])

  return (
    <div>
      <h2>자동 포커스 Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="여기에 자동 포커스가 와야 합니다"
      />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
