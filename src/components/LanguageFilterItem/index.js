import './index.css'

export const Filter = props => {
  const {item, changereq} = props
  const chan = () => {
    changereq(item.id)
  }
  return (
    <button type="button" className="itemsty" id="but1" onClick={chan}>
      <li className="testy">{item.language}</li>
    </button>
  )
}
export const res = () => {
  const k = 9
  return <h1>{k}</h1>
}
