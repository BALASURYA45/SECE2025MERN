import {useState} from "react";
import UpdateNumber1 from "./UpdateNumber";
import UpdateText2 from "./UpdateText";
const Memo=()=>{
    var[num,setNum]=useState(0);
    var[num1,setNum1]=useState(0);

    return(
        <div>
            <h2>This page is ment for Optimization Process using React.memo</h2>
            
            <UpdateNumber1 value={num1}/>
            <button onClick={()=>setNum(num+1)}>+</button>
            <UpdateText2 value={num1}/>
            <button onClick={()=>setNum(num+1)}>+</button>
            
        </div>
    );
};
export default Memo;