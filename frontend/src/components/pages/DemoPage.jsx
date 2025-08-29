import React from 'react'

const DemoPage = ({fn}) => {


  return (

    <>
    <div>DemoPage</div>
    
    <button onClick={(e)=> fn(e)}>Submit</button>
 </> 
 )
}

export default DemoPage