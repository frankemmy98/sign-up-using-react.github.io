
import React from "react"
import '../index.scss'

export default function Form() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        isSigned: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
          event.preventDefault()
          
          if(formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
          }else {
              console.log("passwords do not match")
              return
          }
    
          if(formData.isSigned) {
            console.log("Thanks for signing up for our news letter!")
        }
    }

   return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
        />
        <input 
            type="password" 
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
        />
        <input 
            type="password" 
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
        />
        
        <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name="joinedNewsletter"
                onChange={handleChange}
                value={formData.joinedNewsletter}
                
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button 
            className="form--submit"
        >
            Sign up
        </button>
    </form>
</div>
   )
}
