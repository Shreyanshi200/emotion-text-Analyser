import "./analyze.css"
import Navbar from '../../Components/Navbar/Navbar'
// import React, {useState,useEffect} from 'react'

const Analyze = () => {
//   const [data,setData] = useState([])
  
//   useEffect(()=>{
//     fetch("/predict_api").then(data=>{
//          setData(data)
//     }).then(result => console.log(data))
//   },[])


  return (
    <>
    <Navbar/>
    <div className="analyze">
      <div className="analyze-box">
        <div className="analyze-content">
            <p>Play around with our Emotion Analyzer!</p>
            <div className="wrapper">
                <div className="container">
                    <h3>Test with your own text!!!</h3>
                    {/* <form action="/predict_api" method="POST"> */}
                    <form >
                    <textarea placeholder='Type your text here'></textarea>
                    <button className="btn">Predict Emotion</button>
                     </form>
                </div>
                <div className="container">
                     <h3>Results</h3>
                    <div className="results">
                        {/* <h2>{data}</h2> */}
                    </div>
                </div>
            </div>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default Analyze
