import { useEffect, useState } from "react"

export default function EffectWithoutDeps() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // 1️⃣ 의존성 배열 없음
  useEffect(() => {
    console.log("매 렌더링마다 실행!")
  })

  // 2️⃣ 빈 배열
  useEffect(() => {
    console.log("처음 1회만 실행!")
  }, [])

  // 3️⃣ 특정 값(count)이 바뀔 때
  useEffect(() => {
    console.log(`count 값이 ${count}로 바뀔 때만 실행!`)
  }, [count])

  return (
    <div>
      <h2>useEffect 기본 실행 시점</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount2(count2 + 1)}>+1</button>
    </div>
  )
}
