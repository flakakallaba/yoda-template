const LOWERCASE = /^(?=.*[a-z])/
const UPPERCASE = /^(?=.*[A-Z])/

// Function for email validation
const emailValidation = (email) => {
    if(email.length === 0){
        return "Required"
    }
    else {
      return "Email is invalid"
    }
   
}

// Function for password validation
const passValidation = (password) => {
    if(password.length === 0){
        return "Required"
    }
    else if (password.length <= 8 && UPPERCASE.test(password) && LOWERCASE.test(password)) {
      return "Must contain 8 characters"
    }
    else if (password.length >= 8 && !UPPERCASE.test(password) && LOWERCASE.test(password)) {
      return "Must contain one Uppercase"
    }
    else if (password.length >= 8 && UPPERCASE.test(password) && !LOWERCASE.test(password)) {
      return "Must contain one Lowercase"
    }
    else if (password.length <= 8 && !UPPERCASE.test(password) && LOWERCASE.test(password)) {
      return (
        <>Must contain 8 characters<br />
          Must Contain one Uppercase <br />
        </>)
    }
    else if (password.length <= 8 && UPPERCASE.test(password) && !LOWERCASE.test(password)) {
      return (
        <>Must contain 8 characters<br />
          Must Contain one Lowercase
        </>)
    }
    else if (password.length <= 8 && !UPPERCASE.test(password) && !LOWERCASE.test(password)) {
      return (
        <>Must contain 8 characters<br />
          Must Contain one Uppercase <br />
          Must Contain one Lowercase
        </>)
    }
}



export {emailValidation, passValidation}