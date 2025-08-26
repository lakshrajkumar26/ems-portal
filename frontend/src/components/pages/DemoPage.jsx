import React from 'react'

const DemoPage = ({fn}) => {


const calculateUsers = ( )=>{
  const ans =0;
  for( let i =0;i<100000000000;i++){
    console.log(i);
    ans =i;
  }
  console.log("computed",ans)
}



  return (

    <>
    <div>DemoPage</div>
    
    <button onClick={(e)=> fn(e)}>Submit</button>
 </> 
 )
}

export default DemoPage