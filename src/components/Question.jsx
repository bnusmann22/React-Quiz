import Options from "./options";

function Question({questions, answer , dispatch}) {
    console.log(questions); 
  return (
    <div>
        <h4>{questions.question}</h4>
        {/* <Options questions={questions} /> */}
        <Options questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  )
}

export default Question