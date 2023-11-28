import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';                  
import './reg.css'
import axios from 'axios'
export default function Login(){   
  
  const[fname,setFName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[conpassword,setconPassword]=useState("");

  

  const handleFname=(event)=>
  {
      setFName(event.target.value);
  }
  const handleEmail=(event)=>
  {
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>
  {
      setPassword(event.target.value);
  }
  const handleconPassword=(event)=>
  {
      setconPassword(event.target.value);
  }


  const handleSubmit=(event)=>
  {
      event.preventDefault();
      axios.
      post("http://localhost:3001/users",{"fname":fname,"lname":conpassword,"email":email,"password":password})
      .then((res)=>
      {
          console.log(res.data);
      })
      .catch((error)=>
      {
          console.log("Error: "+error);
      })
    
  }

return(
        <div >
        <div className='des1'></div>
        <div className='header'>
                
        </div>
        {/* <FontAwesomeIcon style={{width:'50px',height:'50px'}} icon={faUser} bounce /> */}
        <div style={{marginLeft:'400px',width:'700px'}} className='login'>
            <h1><span style={{color:'#39A7FF'}}>Register</span> to continue</h1>
            <label><b>Username : </b></label>
            <input onChange={handleFname} style={{marginLeft:'80px'}} type='text' placeholder='Enter Username... '></input><br></br>
            <label><b>Email : </b></label>
            <input onChange={handleEmail}  style={{marginLeft:'115px'}} type='text' placeholder='Enter Email... '></input><br></br>
            <label><b>Password : </b></label>
            <input onChange={handlePassword}  style={{marginLeft:'85px'}} type='password' placeholder='Enter Password... '></input><br/>
            <label><b>Confirm Password : </b></label>
            <input onChange={handleconPassword}  style={{marginLeft:'20px'}} type='password' placeholder='Confirm Password... '></input>
        </div>
        <div className='Footer' style={{marginTop:'-100px'}}>
                <button onClick={handleSubmit} className='button' style={{borderRadius:'10px'}} type='submit'>Register</button>
                {/* <a href='#' style={{marginLeft:'60px',color:'black'}}>Forget Password?</a> */}
        </div>
        <div className='footer2'>
                <a style={{color:"#39A7FF"}}>Register With </a>
               <GoogleIcon style={{marginRight:"10px",marginLeft:"20px"}}/>
               <FacebookIcon style={{marginLeft:"5px"}}/>
               <TwitterIcon style={{marginLeft:"20px"}}/>
        </div>
        <div className='des2'>
                
        </div>

        </div>
  )
}