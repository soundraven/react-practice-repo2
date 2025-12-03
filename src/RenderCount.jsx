import { useEffect } from "react"
import { useState, useRef } from "react"

export default function RenderCount() {
  const [count, setCount] = useState(0)
  // TODO: 이전 count를 저장할 useRef 변수를 만드세요.
  const prevCountRef = useRef(null)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    // TODO: 클릭할 때마다 이전 count를 ref에 저장하세요.
  }

  // TODO: 렌더링 때마다 이전 값과 현재 값을 출력하세요.
  useEffect(() => {
    prevCountRef.current = count
  }, [count])

  return (
    <div>
      <h2>이전 값 기억하기</h2>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCountRef.current}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
