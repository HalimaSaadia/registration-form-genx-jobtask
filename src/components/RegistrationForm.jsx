import useRegistrationFormValidation from "../Hooks/useRegistrationFormValidation";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    contact,
    setContact,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    validateForm,
  } = useRegistrationFormValidation();

  const handleSubmit = () => {
    const isValid = validateForm();
    console.log(isValid);
    if (isValid) {
      console.table([
       [ "First Name",firstName],
        ["Last Name",lastName],
        ["Email",email],
        ["Contact",contact],
        ["Password",password],
        ["Confirmed Password",confirmPassword],
      ]);

      setFirstName("");
      setLastName("");
      setEmail("");
      setContact("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="formContainer">
      <div className="voidContainer"> </div>
      <div className="sing-up-container">
        <h3>SIGN UP</h3>
      </div>
      <div className="registrationForm">
        <div className="nameContainer inputContainer">
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.firstName}</p>
          </div>
          <div>
            <label htmlFor="lastName">LAST NAME</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.lastName}</p>
          </div>
        </div>
        <div className="contactContainer inputContainer">
          <div>
            <label htmlFor="email">EMAIL</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.email}</p>
          </div>
          <div>
            <label htmlFor="contact">CONTACT</label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.contact}</p>
          </div>
        </div>
        <div className="passwordContainer inputContainer">
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.password}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
            />
            <p className="errorMessage">{errors?.confirmPassword}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit} className="submitButton">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="sing-in-container">
        <p>
          Have Account?&nbsp; <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
