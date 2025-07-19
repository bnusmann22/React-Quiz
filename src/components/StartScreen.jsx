
function StartScreen({numQuestions, dispatch}) {
  return (
    <div className="start">
       <h2>Welcome to the React QUIZ</h2>
       <h3> {numQuestions} questions to test your knowledge</h3>
       <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}>Lets start</button>
    </div>
  )
} 

export default StartScreen