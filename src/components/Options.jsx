
function Options({questions}) {
  return (
    <div className="options">
        {questions.options.map((option) => (
            <button key={option} className="btn btn-option">
                {option}
            </button>
        ))}
    </div>
  )
}

export default Options