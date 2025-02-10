import { SignIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function SignInPage() {
  const { isSignedIn } = useUser(); // Check if user is signed in
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/"); // Redirect to landing page after sign-in
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <Header />
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl tracking-wide leading-none flex justify-center mb-8">
          All Your Health Information <br />
          <span className="text-blue-500"> in One Place, </span> Accessible,
          <span className="text-blue-500">Anywhere</span> Anytime.
        </h2>
        <div className="flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
