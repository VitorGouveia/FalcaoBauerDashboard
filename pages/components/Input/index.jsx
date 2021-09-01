import { FiEye, FiEyeOff } from "react-icons/fi"
import { useToggle } from "../../hooks"

export const Input = ({ name, type, placeholder, ...rest }) => {
  const [showPassword, setShowPassword] = useToggle()
  let input = showPassword ? "text" : "password"

  return (
    <>
    {type === "password" ? (
      <div className="input-wrapper password">
        <label className="sr-only" htmlFor={name}>{name}</label>

        <label class="hide-password">
          {showPassword ? (
            <FiEyeOff onClick={() => setShowPassword()} />
          ) : (
            <FiEye onClick={() => setShowPassword()} />
          )}
        </label>

        <input {...rest} required type={input} name={name} placeholder={placeholder} />
      </div>
    ) : (
      <div className="input-wrapper">
        <label className="sr-only" htmlFor={name}>{name}</label>
        <input {...rest} id={name} type={type} placeholder={placeholder} />
      </div>
      )}
    </>
  )
}