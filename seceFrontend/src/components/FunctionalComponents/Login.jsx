import { Link } from "react-router-dom"
import "../../css/signUp.css"
const Login=()=>{
    return (
    
        <div className="signup">
            <form method="post" action="http://localhost:3001/login">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="enter your email" required/>
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password" required/>
                </div>
                
                <Link to='/home' className="btn">Login</Link>
            </form>
        </div>
        
    )
}
export default Login