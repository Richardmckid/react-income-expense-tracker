import './button.module.scss'

const Button = ({type = 'submit', onClick, children, disabled, ...rest}) => {
  
  return (
    <button
      onClick={onClick}
      type={type}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button