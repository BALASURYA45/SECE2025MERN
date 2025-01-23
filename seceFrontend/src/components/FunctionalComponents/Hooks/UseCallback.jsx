const UseCallback = () => {
    var[num,setNum]=useState(0);
    return (
      <div>
        <h2>Welcome to UseCallback Page</h2>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
      </div>
    );
  };
  export default UseCallback;