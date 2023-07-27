//  import React from "react";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SideNav from "./Navbar";
import * as Components from './Components';
import axios from 'axios';
import "./App.css";
// import mainbg from './photo-1614149162883-504ce4d13909.jpeg';
 function App() {
    // const[id,setid]=useState("");
    const navigate=useNavigate;
    const[email,setemail]=useState("");
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[username1,setusername1]=useState("");
    const[password1,setpassword1]=useState("");
    const handleSubmit = async(e) => {
    e.preventDefault();
    // Call the login action with the entered credentials
      // const data = {
      //   username:username,
      //   password:password
      // }
      console.log(username+" "+password);
      // axios.post("",data);
      try{
        const response = await axios.post('http://localhost:8180/api/auth/signin', { username, password });
        // dispatch(loginSuccess(email.substring(0,email.length-10)));
      console.log(response)
    //   alert("Invalid")
    //   navigate('/');
    }
    catch(e){
       
        alert("Login Successful")
        navigate('/navbar');
      
      }
      // const token = response.data.token;
      // alert(IsLoggedIn)
  }
const SubmitHandler1=(e)=>{
    e.preventDefault();
    const data={
        // id:id,
        username:username1,
        password:password1
    };
    console.log(username1)
    console.log(password1)
    axios.post('http://localhost:8181/api/v1/auth/authenticate',data);
}
const SubmitHandler=(e)=>{
    e.preventDefault();
    const data={
        // id:id,
        username:username,
        email:email,
        password:password
    };
    axios.post('http://localhost:8181/api/v1/auth/register',data);
}
     const [signIn, toggle] = React.useState(true);
      return(
        <body className='signincenter'>
        {/* <img src={mainbg} width={700} height={700}/> */}
        
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={SubmitHandler1}>
                      <Components.Input type='text' placeholder='Username' onChange={(e)=>setusername1(e.target.value)}/>
                      <Components.Input type='password' placeholder='Password' onChange={(e)=>setpassword1(e.target.value)}/>
                      <Components.Button type='submit'>Sign In</Components.Button>
                      {/* <button onClick={alert("Invalid credentials")}><Link to="/navbar" className='xxxxx'>Sign In</Link></button> */}
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       {/*   */}
                      <Components.Title>Create Account</Components.Title>
                       {/* <Components.Input type='id' placeholder='id' onChange={(e)=>setid(e.target.value)}/> */}
                       <Components.Input type='text' placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
                       <Components.Input type='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
                       <Components.Input type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)} />
                       <Link to="/navbar"><Components.Anchor href='#'>Forgot your password?</Components.Anchor></Link>
                       
  <Components.Button onClick={SubmitHandler}>Sign Up</Components.Button>

                       
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Click to SignUp</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign Up
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        {/* <Components.Title>Music Hits</Components.Title> */}
                        <Components.Paragraph>
                        Click to signin
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign In
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </body>
      )
 }

 export default App;
 