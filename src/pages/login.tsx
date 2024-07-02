import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase/supabase";
import { LoginForm } from "../components/auth/login-form";
import { AuthWrapper } from "../components/auth-wrapper";

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/");
    }
  });

  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
};

export default Login;
