import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      if (!phone || phone.length < 10) {
        toast.error("Enter valid phone number");
        return;
      }

      setLoading(true);

      console.log("Sending OTP to phone:", phone);

      const { data } = await axios.post(
        "http://localhost:3000/api/auth/send-otp",
        { phone },
      );
  console.log("OTP API response:", data);
      if (data.success) {
        toast.success("OTP sent successfully");
        setOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Server error. Try again");
    } finally {
      setLoading(false);
    }
  };
  const verifyOtp = () => {
    console.log("Verify OTP:", otp);

    // call backend verify API
  };

  return (
    <div
      className="min-h-[85vh] flex items-center justify-center px-4 
    bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        {/* LEFT SIDE IMAGE */}

        <div className="hidden md:flex relative">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold">UrbanKicks</h2>

            <p className="text-sm mt-2 text-gray-200">
              Premium UA+ sneakers with style and comfort.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            {isSignup ? "Create Account" : "Sign In"}
          </h2>

          <p className="text-gray-500 text-sm mt-2">Login using OTP</p>

          {/* SOCIAL LOGIN */}

          <div className="flex gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 w-full h-11 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 w-full h-11 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          {/* DIVIDER */}

          <div className="flex items-center gap-4 my-6">
            <div className="h-px w-full bg-gray-200"></div>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              or login with OTP
            </p>
            <div className="h-px w-full bg-gray-200"></div>
          </div>

          {/* NAME (Signup only) */}

          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="h-12 px-4 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {/* PHONE INPUT */}

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-4 h-12 px-4 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* SEND OTP */}

          {!otpSent && (
            <button
              onClick={sendOtp}
              disabled={loading}
              className="mt-6 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send OTP"
              )}
            </button>
          )}

          {/* OTP INPUT */}

          {otpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-4 h-12 px-4 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={verifyOtp}
                className="mt-4 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition"
              >
                Verify OTP
              </button>
            </>
          )}

          {/* SWITCH LOGIN SIGNUP */}

          <p className="text-sm text-gray-500 mt-5">
            {isSignup ? "Already have an account?" : "Don't have an account?"}

            <span
              onClick={() => setIsSignup(!isSignup)}
              className="ml-1 text-blue-600 cursor-pointer font-medium"
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
