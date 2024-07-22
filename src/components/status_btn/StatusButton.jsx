import './statusBtn.css'

// eslint-disable-next-line react/prop-types
function StatusButton({title, number}) {

  return (
    <button className="status-btn">
        <div className='divider'></div>
        <div className="button-text">
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    </button>
  )
}

export { StatusButton }
