import { useEffect, useReducer} from "react"
import Header from "./Header"
import Loader from "./Loader"
import Error from "./Error"
import MAIN from "./MAINo"
import StartScreen from "./StartScreen"
import NextButton from "./NextButton"
import Question from "./Question"
const initialState = {
  questions: [],

  status : "loading",
  index : 0,
  points: 0,
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
      case "newAnswer": {
      const question = state.questions.at(state.index);
    
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption
          ? state.points + question.points
          : state.points,
      };
    }
      case "nextQuestion":
        return{
          ...state,
          index: state.index + 1,
          answer: null,
        }
    default:
      throw new Error (`Action Unknown`)
  }

}

export default function App(){
  const [{questions, status, index, answer}, dispatch] = useReducer(reducer , initialState)

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
            {status === "start" && 
              <>
              <Question 
                questions={questions[index]}
                answer={answer} 
                dispatch={dispatch}
              />

              <NextButton  dispatch={dispatch} answer={answer}/>
              </>
            }
          </MAIN>
        </div>
    )
}