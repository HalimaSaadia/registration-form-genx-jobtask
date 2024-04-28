import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import Lottie from "react-lottie";
import securityAnimation from "./assets/security.json";

function App() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: securityAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <RegistrationForm />
      <div className="securityAnimation">
        <Lottie options={options}  />
      </div>
    </div>
  );
}

export default App;
