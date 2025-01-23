import { useState, useMemo } from "react";

var slowFunction=()=>{
    for(var slow =0;slow<1000000;slow++){}
}
const UseMemo=()=>{
    var[num,setNum]=useState(0);
    var [dark,setDark] = useState(false);
    var styling={
        backgroundColor: dark? "black":"white",
        color: dark? "white":"black"
    }
    var doublingUpANumber=()=>useMemo(
        ()=>{
            // slowFunction(num);
            return num*2;
        }
    )
    return(
        <div style={styling}>
            
            <h2>This page is ment for UseMemo Hook</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setDark(curTheme=>!curTheme)} >Toggle Theme</button>
            <h4 style={styling}>The number is {doublingUpANumber()} </h4>
        </div>
    )
}
export default UseMemo;