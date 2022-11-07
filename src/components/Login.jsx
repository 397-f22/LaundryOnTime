import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  return (
    <main>
      <section>
        <button className="login-with-google-btn" onClick={handleLogin}>
          Sign in with Google
        </button>
      </section>
    </main>
  );
};

export default Login;
