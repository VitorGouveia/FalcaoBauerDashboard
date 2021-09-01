import { useState } from "react"

export const useToggle = () => {
  const [toggle, setToggle] = useState(false)

  const useToggleSetToggle = () => {
    setToggle(!toggle)
  }

  return [toggle, useToggleSetToggle]
}