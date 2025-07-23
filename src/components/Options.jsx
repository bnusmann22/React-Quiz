function Options({questions, dispatch, answer}) {
  const hasAnswered = answer !== null
  return (
    <div className="options">
        {questions.options.map((option, index) => (
            <button 
              key={option} 
              className={
                `btn btn-option 
                ${
                  index === answer ? "answer" : "" 
                } 
                ${
                  hasAnswered ? 
                    index === questions.correctOption ? "correct" : "wrong" 
                  : ""  
                }`}
              disabled ={hasAnswered}
              onClick={()=> dispatch({type: "newAnswer", payload: index})}
            >
              {option}
            </button>
        ))}
    </div>
  )
}

export default Options