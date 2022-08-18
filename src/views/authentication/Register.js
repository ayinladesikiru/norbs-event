import Input from "../../components/reuseables/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import "./authentication.css"
import {useState} from "react";
import StepContainer from "../../components/authentication/register/StepContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Register = () => {

    let navigate = useNavigate()

    const [userInput, setUserInput] = useState({})
    const [step, setStep] = useState(1)
    const [fieldError, setFieldError] = useState({
        firstName: {message: "", error: false},
        lastName: {message: "", error: false},
        email: {message: "", error: false},
        phone: {message: "", error: false},
        password: {message: "", error: false},
        confirmPassword: { message: "", error: false}})

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
        checkIfFieldIsEmpty(e)
    }

    const handleClick = () => {

        let data = {
            id:2,
            firstName: 'Asa',
            lastName: 'Dhikirullah'
        }
        axios.post("http://localhost:3001/accounts", userInput)
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name) {
            case "email":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name] :
                            {
                                message: "Please enter a valid email",
                                error: true
                            }
                    })
                } else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })

                }
                break;
            case "password":
                if (e.target.value === "") {
                    setFieldError({
                        ...fieldError,
                        [e.target.name] :
                            {
                                message: "Please enter a password",
                                error: true
                            }
                    })
                } else {
                    setFieldError({
                        ...fieldError,
                        [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            default:
                break;
        }
    }

    const checkIfItIsEmail = (e) => {

    }

    return (
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">
                    <a onClick={() => navigate("/login")}>
                        Have an account?
                            <span style={{color: 'var(--primary_green)',
                              marginLeft: '4px' }}>
                                Log In
                            </span>
                    </a>
                    <div className="welcome-text">
                        <h1 style={{color: 'var(--primary_green)'}}>welcome to Norbs</h1>
                        <p>we are event management platform,
                            we aimed at helping you facilitate and run a smooth event</p>
                    </div>
                    <div>
                        {step === 1 && <StepContainer step={1} headerTitle="Let's know you">
                            <Input text="text" handleChange={handleChange} icon={emailIcon} label="firstName"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={emailIcon} label="lastName"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="email"
                                   fieldError={fieldError}/>
                        </StepContainer>}

                        {step === 2 && <StepContainer step={2} headerTitle="Let's Secure your Details">
                            <Input text="text" handleChange={handleChange} icon={emailIcon} label="phone"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={emailIcon} label="password"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="confirmPassword"
                                   fieldError={fieldError}/>
                        </StepContainer>}
                        {step === 1 && <button onClick={() => setStep(2)} style={{width: '70%'}} className="authentication-button">Next Step</button>
                        }
                        {step ===2 && <div style={{display: "flex", justifyContent: "space-between", width: "70%"}}>
                            <button onClick={() => setStep(1)} style={{width: '48%'}} className="authentication-button-alternate">Go Back
                            </button>
                            <button style={{width: '48%'}} className="authentication-button"
                                    onClick={handleClick}>Register
                            </button>
                        </div>}


                    </div>

                    <div className="social-media">
                        <button><div className="social-media-icon"></div></button>
                    </div>
                </div>
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}

export default Register