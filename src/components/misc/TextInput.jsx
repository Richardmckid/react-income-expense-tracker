import './textinput.module.scss'
const TextInput = ({type='text', onChange, ...rest}) => {
  return (<input type={type} onChange={onChange} {...rest} />)
}

export default TextInput