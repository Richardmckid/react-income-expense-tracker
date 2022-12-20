import './button.module.scss'

const Button = ({type = 'submit', onClick, children, disabled, icon, ...rest}) => {
  
  return (
    <button
      onClick={onClick}
      type={type}
      {...rest}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  )
}

export default Button