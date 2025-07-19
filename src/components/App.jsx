import { useEffect, useReducer} from "react"
import Header from "./Header"
import Loader from "./Loader"
import Error from "./Error"
import MAIN from "./MAINo"
import StartScreen from "./StartScreen"
import Question from "./Question"
const initialState = {
  questions: [],

  status : "loading",
  index : 0,
  answer: null,
}
function reducer(state, action){
  switch(action.type){
    case "dataRecieved":
      return{
        ...state,
        questions: action.payload,
        status: "ready"
      }
    case "dataFailed":
      return{
        ...state,
        status: "Error"
      }
    case "start":
      return{
        ...state,
        status: "start"
      }
    case "start":
    default:
      throw new Error (`Action Unknown`)
  }

}

export default function App(){
  const [{questions, status, index}, dispatch] = useReducer(reducer , initialState)

  const numQuestions = questions.length
  useEffect(() => {
    fetch("http://localhost:8000/questions")
    .then(res => res.json())
    .then(data => dispatch({type: "dataRecieved", payload: data}))
    .catch((err) => dispatch({type: "dataFailed"}))
  
  }, [])
  
    return (
        <div className="App">
          <Header />

          <MAIN>
            {status === "loading" && <Loader />}
            {status === "Error" && <Error />}
            {status === "ready" && <StartScreen  numQuestions={numQuestions} dispatch={dispatch}/>}
            {status === "start" && <Question questions={questions[index]}/>}
          </MAIN>
        </div>
    )
}