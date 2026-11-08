import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import api from "../../utils/axios";
import { auth, googleProvider } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/api/auth/login", { token });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = await signInWithPopup(auth, googleProvider);
      const token = await data.user.getIdToken();
      console.log("token generated: ", token);
      await handleLogin(token);
      console.log("Logged in user:", data);
    } catch (error) {
      if (
        error.code === "auth/cancelled-popup-request" ||
        error.code === "auth/popup-closed-by-user"
      ) {
        console.warn("Popup closed or superseded:", error.code);
      } else {
        console.error("Firebase Auth Error:", error.code, error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-[#0d0f14] text-white overflow-hidden">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xl">
        <div className="w-[340px] bg-[#13151c] border border-white/[0.98] rounded-2xl p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-[17px] font-semibold text-slate-100 tracking tight">
              welcome to Cortex Ai
            </h2>
            <p className="text-[13px] text-slate-500">
              Please login to continue using the app
            </p>
          </div>
          <button
            className="w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-white bg-linear-to-br from-indigo-500 to-violet-700 hover:from-indigo-400 hover:to-violet-600 active:from-indigo-600 active:to-violet-800 border border-indigo-500/30 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-150 cursor-pointer"
            onClick={googleLogin}
          >
            <FcGoogle size={15} />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
