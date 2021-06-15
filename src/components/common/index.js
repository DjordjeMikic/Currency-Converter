import "./style.css";

export const Input = ({ id, e, info, ...rest }) => {
  return (
    <div className="flex column input-container">
      <label htmlFor={id}>{info}</label>

      <input
        type="text"
        className="input"
        id={id}
        {...rest}
      />

      {e ? <p className="e">{e}</p> : ''}
    </div>
  )
}

export const Select = ({ state, base, ...rest }) => {
  return (
    <div className="flex column">
      <select className="input" value={base} { ...rest }>
        {state && state.length && state.map((a, b) => (
          <option value={a} key={a + b}>{a}</option>
        ))}
      </select>
    </div>
  )
}
