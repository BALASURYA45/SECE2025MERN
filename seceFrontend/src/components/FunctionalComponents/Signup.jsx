import { Link } from "react-router-dom"
import "../../css/signUp.css"
const Signup=()=>{
    return (

        <div className="signup">
            
            <form method="post" action="http://localhost:3001/signup">
            <div className="input">
                    <label htmlFor="name">firstName</label>
                    <input type="text" name="firstname" placeholder="enter your firstname" required/>
                </div>
                <div className="input">
                    <label htmlFor="name">lastName</label>
                    <input type="text" name="lastname" placeholder="enter your lastnamename" required/> 
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="enter your name" required/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password" required/>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="text" name="password" placeholder="confirm your password" required/>
                </div>
                <Link to='/home' className="btn">Submit</Link>
                
                {/*<Link to='/home' className="btn" >Submit</Link>
                <Link to='/login' className="btn">Login?</Link>*/}
            </form>
        </div>

    )
}
export default Signup;