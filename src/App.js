import React,{useState,useEffect} from "react";
import './App.css';

function App() {
  const [leftCount, setLeftCount] = useState(29)
  const [rightCount, setRightCount] = useState(71)
  const [totalCount, setTotalCount] = useState(2501)
  const [leftWidth, setLeftWidth] = useState(29)
  const [rightWidth, setRightWidth] = useState(71)

  useEffect(() => {
  }, [])
  
  function addLeftCount(e){
    if (leftCount == 100){
      return
    }
    setLeftCount(prevCount => prevCount+1);
    setRightCount(prevCount => prevCount-1);
    setTotalCount(prevCount => prevCount+1);
    
    setLeftWidth(prevWidth => prevWidth+1)
    setRightWidth(prevWidth => prevWidth-1)
  }

  function addRightCount(e){
    if (rightCount == 100){
      return
    }
    setRightCount(prevCount => prevCount+1);
    setLeftCount(prevCount => prevCount-1);
    setTotalCount(prevCount => prevCount+1);

    setLeftWidth(prevWidth => prevWidth-1);
    setRightWidth(prevWidth => prevWidth+1);    
  }

   return (
  <div>
    <div id="div2" style={{
      width: `${leftWidth}%`
    }}>
    </div>
   <div id="div1" style={{
      width: `${rightWidth}%`
   }}>
   </div>
   
    <div className="card">
    <div id="CardCat" onClick={e => addLeftCount(e)}>
     
    <p>CATS<br/>{`${leftCount}%`}</p>
    </div>
    <div><hr/></div>
    <div id="CardDog" onClick={e => addRightCount(e)}>
        <p>DOGS<br/>{`${rightCount}%`}</p>
       </div>
   </div>
   <div className="result">
   <p>{`Total Votes:${totalCount}`}</p>
   </div>
   </div>

)};





export default App;
