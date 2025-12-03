import Logo from "../../assets/images/LOGO.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left side content (hidden on small screens) */}
        <div className="hidden md:flex flex-col space-y-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome back to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              D‑Light
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Login to manage your orders, track deliveries, and access exclusive
            deals on electrical &amp; lighting products.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="rounded-2xl bg-gray-900/70 border border-gray-800 p-3">
              <p className="font-semibold text-yellow-300 mb-1">
                Secure payments
              </p>
              <p className="text-gray-400">
                Encrypted checkout and trusted Indian gateways.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-900/70 border border-gray-800 p-3">
              <p className="font-semibold text-yellow-300 mb-1">
                Genuine products
              </p>
              <p className="text-gray-400">
                Direct from authorized brands only.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: login card */}
        <div className="bg-gray-950/90 border border-gray-800/80 rounded-2xl shadow-2xl shadow-black/40 px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-10">
          {/* Logo + title */}
          <div className="flex items-center mb-6 sm:mb-8 space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <img src={Logo} alt="Dlight Logo" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Sign in
              </p>
              <p className="text-lg font-semibold text-white">
                D‑Light Account
              </p>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-xl border border-gray-700 bg-gray-900/80 px-3 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:border-yellow-400/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                placeholder="you@example.com"
              />
            </div>

            {/* Password + Forgot link */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-[11px] sm:text-xs font-medium text-yellow-300 hover:text-yellow-200"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-xl border border-gray-700 bg-gray-900/80 px-3 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:border-yellow-400/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                placeholder="••••••••"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-600 bg-gray-900 text-yellow-400 focus:ring-yellow-400/50"
                />
                <span>Remember me</span>
              </label>
            </div>

            {/* Primary button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40 hover:from-yellow-300 hover:to-orange-400 transition-all"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="mt-5 sm:mt-6 flex items-center text-xs text-gray-500">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="px-3">or continue with</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Social buttons (optional) */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full rounded-xl border border-gray-700 bg-gray-900/70 px-3 py-2 text-xs sm:text-sm text-gray-200 hover:bg-gray-800 transition"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-gray-700 bg-gray-900/70 px-3 py-2 text-xs sm:text-sm text-gray-200 hover:bg-gray-800 transition"
            >
              Facebook
            </button>
          </div>

          {/* Sign up link */}
          <p className="mt-5 text-center text-xs sm:text-sm text-gray-400">
            New to D‑Light?{" "}
            <Link
              to="/signup"
              className="text-yellow-300 hover:text-yellow-200 font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
