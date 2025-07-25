import React from 'react'

function NextButton({answer, dispatch}) {

  if (answer === null ) return null 
  return (
    <button className='btn btn-ui' onClick={()=> dispatch({type: "nextQuestion"})}>
      Next
    </button>
  )
}

export default NextButton
