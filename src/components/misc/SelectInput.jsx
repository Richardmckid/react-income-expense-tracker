import './selectinput.module.scss'

const SelectInput = ({onChange, value, options, ...rest}) => {
  return (
    <select value={value} onChange={onChange}>
        {
            options.map(item => (
                <option key={item.label} value={item.id}>{item.label}</option>
            ))
        }
    </select>
  )
}

export default SelectInput