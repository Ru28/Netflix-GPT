import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"> 
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix? Sign Up Now": "ALready registered? Sign In Now"}  
        </p>
      </form>
    </div>
  )
}

export default Login;