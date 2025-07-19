import Options from "./options";

function Question({questions}) {
    console.log(questions); 
  return (
    <div>
        <h4>{questions.question}</h4>
        {/* <Options questions={questions} /> */}
        <Options questions={questions} />
    </div>
  )
}

export default Question