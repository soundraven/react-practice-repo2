import { useEffect, useRef, useState } from "react"

export default function InfiniteScroll() {
  const [data, setData] = useState([])
  const [visibleCount, setVisibleCount] = useState(10)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        )
        if (!response.ok) throw new Error("API 오작동")

        const json = await response.json()
        console.log(json)
        setData(json)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!sentinelRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 10)
        } else {
          console.log(entries)
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    )

    observer.observe(sentinelRef.current)

    return () => observer.disconnect()
  }, [])

  const visibleData = data.slice(0, visibleCount)

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {visibleData.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.id}. {item.title}
              </p>
              <p>{item.body}</p>
            </li>
          )
        })}
      </ul>
      <div ref={sentinelRef}></div>

      {visibleCount < data.length ? <p>Now Loading...</p> : <p>End of Data</p>}
    </>
  )
}
