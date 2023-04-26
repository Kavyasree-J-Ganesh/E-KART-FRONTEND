import React, { useState } from "react";
import "./Signup.css";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { signup, signin  } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const emailRegex = /^[A-Za-z0-9][A-Za-z0-9+-]*[.]?[A-Za-z0-9+-]+@[A-Za-z0-9][A-Za-z0-9+-]*(.[A-Za-z0-9]+)?.[A-Za-z]{2,6}$/
const passwordRegex = /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/
const mobileRegex = /^[0-9]{10}$/

const INITIAL_SIGNUP_OBJ = {
  email: "",
  password: "",
  firstname: "",
  phonenumber: "",
  lastname: "",
  confirmpassword: "",
  companyname: ""
}

const INITIAL_VALIDITY_OBJ = {
  emailHelper: "",
  isEmailInvalid: false,
  mobileHelper: "",
  isMobileInvalid: false,
  passwordHelper: "",
  isPasswordInvalid: false,
  firstNameHelper: "",
  isFirstNameInvalid: false,
  lastNameHelper: "",
  isLastNameInvalid: false,
  confirmPasswordHelper: "",
  isConfirmPasswordInvalid: false,
  isCompanyNameInvalid: false,
  companyNameHelper:"",

}

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [signupObj, setsignupObj] = useState(INITIAL_SIGNUP_OBJ)

  const [validityObj, setValidityObj] = useState(INITIAL_VALIDITY_OBJ)
  const [isSeller, setIsSeller] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  

  function onEmailChange(event) {
    setsignupObj((prev) => { return { ...prev, email: event.target.value } })
  }
  function onPasswordChange(event) {
    setsignupObj((prev) => { return { ...prev, password: event.target.value } })
  }
  function onfirstnameChange(event) {
    setsignupObj((prev) => { return { ...prev, firstname: event.target.value } })
  }
  function onlastnameChange(event) {
    setsignupObj((prev) => { return { ...prev, lastname: event.target.value } })
  }
  function onconfirmpasswordChange(event) {
    setsignupObj((prev) => { return { ...prev, confirmpassword: event.target.value } })
  }

  function onMobileChange(event) {
    setsignupObj((prev) => { return { ...prev, phonenumber: event.target.value } })
  }


  function oncompanynameChange(event) {
    setsignupObj((prev) => { return { ...prev, companyname: event.target.value } })
  }

  const setSeller = ()=>{
    setIsSeller(prevIsSeller=> !prevIsSeller)
    signupObj.companyname = ""
  }

  async function onSubmit(event) {
    event.preventDefault();
    let isEmailValid = emailRegex.test(signupObj.email)
    let passwordValid = !isSignUp || passwordRegex.test(signupObj.password)
    let firstnameValid = !isSignUp || firstnameRegex.test(signupObj.firstname)
    let mobileNumberValid = !isSignUp || mobileRegex.test(signupObj.phonenumber)
   

    console.log(signupObj)

    if (!isEmailValid) {
      setValidityObj(prev => { return { ...prev, isEmailInvalid: true, emailHelper: "Invalid email" } })
    } else {
      setValidityObj(prev => { return { ...prev, isEmailInvalid: false, emailHelper: "" } })
    }

    if (!passwordValid) {
      setValidityObj(prev => { return { ...prev, isPasswordInvalid: true, passwordHelper: "Invalid password" } })
    } else {
      setValidityObj(prev => { return { ...prev, isPasswordInvalid: false, passwordHelper: "" } })
    }

    if (!firstnameValid) {
      setValidityObj(prev => { return { ...prev, isFirstNameInvalid: true, firstNameHelper: "Invalid firstname" } })
    } else {
      setValidityObj(prev => { return { ...prev, isFirstNameInvalid: false, firstNameHelper: "" } })
    }

    if (!mobileNumberValid) {
      setValidityObj(prev => { return { ...prev, isMobileInvalid: true, mobileHelper: "Invalid mobile number" } })
    } else {
      setValidityObj(prev => { return { ...prev, isMobileInvalid: false, mobileHelper: "" } })
    }


    if (passwordValid && signupObj.password != signupObj.confirmpassword) {
      setValidityObj(prev => { return { ...prev, isConfirmPasswordInvalid: true, confirmPasswordHelper: "Password does not match" } })
    } else {

      setValidityObj(prev => { return { ...prev, isConfirmPasswordInvalid: false, confirmPasswordHelper: "" } })
    }

    try {
      let {companyname, ...nonAdminObj} = signupObj
      const result = isSignUp ?  await signup(
        isSeller ? {...signupObj, isAdmin:true} : nonAdminObj 
      ) : await signin({email:signupObj.email, password: signupObj.password})

      if(!isSignUp){
          const token = result.data.token;
          localStorage.setItem("auth", token)
          localStorage.setItem("isAdmin", result.data.isAdmin)
          dispatch({type: "LOGIN", payload: result.data})
          navigate("home")
      }
  } catch (e) {
      console.log(e)
  }


  }

  function changeMode() {
    setIsSignUp(prev => !prev)
    setsignupObj(INITIAL_SIGNUP_OBJ)
    setValidityObj(INITIAL_VALIDITY_OBJ)
  }

  return (
    <div className="signup-page">

      <div
        className="image-box"
        style={{
          backgroundImage: "url(" + Image + ")",
        }}
      >
        <h1 className="description">{isSignUp ? `Looks like you're new here!` : 'Login'}</h1>
        <p className="sub-description">{isSignUp ? 'Signup with your details to get started' : 'Get access to your Orders, Wishlist and Recommendations'}</p>
        <div className="app-logo">
          <img src="./app-logo.jpg" alt="Logo" />
        </div>
      </div>

      <div className="form">
        <form action="">
          
          {isSignUp && <div class="text-box">
            <TextField
              value={signupObj.firstname}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size="small"
              error={validityObj.isFirstNameInvalid}
              helperText={validityObj.firstNameHelper}
              onChange={onfirstnameChange} />
          </div>}

          {isSignUp && <div class="text-box">
            <TextField
              value={signupObj.lastname}
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              size="small"
              onChange={onlastnameChange} />
          </div>}

          {isSeller && isSignUp && <div class="text-box">
            <TextField
              value={signupObj.companyname}
              id="outlined-basic"
              label="Company name"
              variant="outlined"
              size="small"
              error={validityObj.isCompanyNameInvalid}
              helperText={validityObj.companyNameHelper}
              onChange={oncompanynameChange} />
          </div>}


          <div class="text-box">
            <TextField
              value={signupObj.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              error={validityObj.isEmailInvalid}
              helperText={validityObj.emailHelper}
              onChange={onEmailChange} />
          </div>

          {isSignUp && <div class="text-box">
            <TextField
              value={signupObj.phonenumber}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              size="small"
              error={validityObj.isMobileInvalid}
              helperText={validityObj.mobileHelper}
              onChange={onMobileChange}
            />
          </div>}

          <div class="text-box">
            <TextField
              value={signupObj.password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              error={validityObj.isPasswordInvalid}
              helperText={validityObj.passwordHelper}
              onChange={onPasswordChange} />
          </div>

          {isSignUp && <div class="text-box">
            <TextField
              value={signupObj.confirmpassword}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              size="small"
              error={validityObj.isConfirmPasswordInvalid}
              helperText={validityObj.confirmPasswordHelper}


              onChange={onconfirmpasswordChange} />
          </div>}
          {isSignUp &&
          <FormControlLabel control={<Switch color="default" onChange={()=> setSeller()} />} label="Become a seller" />}
          <div className="form_footer">
            <a className="button_primary" onClick={() => { changeMode() }}>{isSignUp ? 'Sign in instead' : 'Create Account'}</a>
            <button className="button_info" onClick={onSubmit}>Next</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default SignUp