import React ,{useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import './pages.css'
import 'primeicons/primeicons.css'


const SignUp = () => {
  

   
    const [passShow,setPassShow]=useState(false)
    const [cpassShow,setcPassShow]=useState(false)

    const [inpval,setInpVal]=useState({});
    const setVal= (e)=>{
     const {name,value}=e.target;
     setInpVal(()=>{
        return{
            ...inpval,
            [name]:value
        }
     })
    };

   

const handleRegister=(e)=>{
    e.preventDefault()
    console.log(inpval)
    fetch("http://localhost:8000/signup/register", {
        method: "POST",
        body: JSON.stringify(inpval),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((res) => alert(JSON.stringify(res)))
}
 return(
<>
<div className='loginContainer'>
    <div className='form_data'>
     <div className='form_heading'>
        <h1>Sign Up</h1>
        <p>Create New Account</p>
     </div>

     <form onSubmit={handleRegister}>
        <div className='form_input'>
           
            <input type='email' value={inpval.email} onChange={setVal} name='email' id='email' placeholder='Mail ID'></input>

        </div>

        <div className='form_input'>
            
            <div className='two'>
            <input type={!cpassShow ?'password':"text"} value={inpval.password}
             onChange={setVal}  name="password" id='password' placeholder='Password'></input>
            <span className='showpass' onClick={()=>setcPassShow(!cpassShow)}>
                {!cpassShow ? <i className='pi pi-eye'></i>:<i className='pi pi-eye-slash'></i>}
            </span>
            </div>
        </div>

        <div className='form_input'>
            <div className='two'>
            <input type={!passShow ?'password':"text"} value={inpval.Cpassword} onChange={setVal}  name="Cpassword" id='Cpassword' placeholder='Conform Password'></input>
            <span className='showpass' onClick={()=>setPassShow(!passShow)}>
                {!passShow ? <i className='pi pi-eye'></i>:<i className='pi pi-eye'></i>}
            </span>
            </div>
            </div>
           
           <button className='btn' onSubmit={handleRegister}>Sign up</button>.         
           <p><NavLink to='/'>Sign in</NavLink></p>
           
     </form>
    </div>
</div>
</>
    
  )
}

export default SignUp;
