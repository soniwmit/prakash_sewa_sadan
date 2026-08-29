import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, EyeOff, Lock, User, Phone, ShieldCheck, 
  CheckCircle2, AlertCircle, ArrowRight, Pill, 
  FileText, Clock, LogOut, Sparkles, HelpCircle 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHelmet } from '../components/SEOHelmet';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!identifier.trim()) {
      setErrorMsg('Please enter your registered mobile number or email.');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your account password.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication check
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 900);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIdentifier('');
    setPassword('');
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotIdentifier.trim()) {
      setForgotSuccess(true);
      setTimeout(() => {
        setForgotSuccess(false);
        setShowForgotPasswordModal(false);
        setForgotIdentifier('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4]">
      <SEOHelmet
        title="Patient & Customer Login - PRAKASH SEWA SADAN"
        description="Access your PRAKASH SEWA SADAN patient portal to view past prescription orders, chronic medication refill dates, and verified GST invoices."
      />

      <div className="w-full max-w-md">
        
        {/* If Logged In, Show User Portal Dashboard */}
        {isLoggedIn ? (
          <div className="rounded-sm bg-white dark:bg-stone-900 p-7 sm:p-8 shadow-2xs border border-stone-300 dark:border-stone-800 space-y-6 animate-in fade-in duration-300 font-mono">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#141414] text-stone-100 flex items-center justify-center font-bold text-base">
                  {identifier.charAt(0).toUpperCase() || 'P'}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#141414] dark:text-white text-base">
                    Patient Portal // Session Active
                  </h3>
                  <p className="text-xs text-stone-500">{identifier}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors cursor-pointer"
                title="Logout"
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

            {/* Portal Stats & Health Refill Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-sm bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 font-bold uppercase block tracking-wider">Next Refill Reminder</span>
                  <strong className="text-xs text-[#141414] dark:text-white">Hypertension & Cardiac Regimen (Telma 40)</strong>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5 font-sans">Due in 5 Days (Free counter hold)</p>
                </div>
                <Clock className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0" />
              </div>

              <div className="p-4 rounded-sm bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 font-bold uppercase block tracking-wider">Saved Prescription File</span>
                  <strong className="text-xs text-[#141414] dark:text-white">Dr. A. K. Verma (Sherpur Road Clinic)</strong>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5 font-sans">Verified on 14 Aug 2026</p>
                </div>
                <FileText className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0" />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 uppercase text-xs">
              <Link
                to="/services"
                className="w-full py-3 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-medium flex items-center justify-center gap-2 shadow-xs transition-all text-center tracking-wider"
              >
                <Pill className="w-4 h-4" />
                Check In-Stock Medicines & Reorder
              </Link>
              <Link
                to="/"
                className="w-full py-2.5 rounded-sm bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-medium flex items-center justify-center gap-1 text-center tracking-wider"
              >
                Back to Home Screen
              </Link>
            </div>
          </div>
        ) : (
          /* Login Form Card */
          <div className="rounded-sm bg-white dark:bg-stone-900 p-7 sm:p-9 shadow-2xs border border-stone-300 dark:border-stone-800 space-y-6">
            
            {/* Branding & Logo */}
            <div className="text-center space-y-2 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-[#141414] text-stone-100 font-mono text-lg font-bold">
                +
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#141414] dark:text-white">
                {SITE_CONFIG.businessName}
              </h2>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                Patient & Store Member Portal
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-400 dark:border-stone-700 text-rose-600 dark:text-rose-400 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4 text-xs font-mono text-stone-800 dark:text-stone-200">
              
              {/* Identifier */}
              <div>
                <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">
                  Email / Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="9931622496 or email@example.com"
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(true)}
                    className="text-stone-500 dark:text-stone-400 hover:underline text-[10px] uppercase tracking-wider"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter account password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded-xs text-[#141414] border-stone-300"
                  />
                  <span className="text-xs text-stone-600 dark:text-stone-400 font-sans">Remember on this device</span>
                </label>
              </div>

              {/* Secure Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                id="login-submit-btn"
                className="w-full py-3 px-4 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-medium text-xs uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                {isLoading ? 'Verifying Credentials...' : 'Secure Member Login'}
              </button>
            </form>

            {/* Help / Guest Notice */}
            <div className="pt-3 text-center text-xs font-mono text-stone-500 space-y-2 border-t border-stone-200 dark:border-stone-800">
              <p>Don't have an online profile yet?</p>
              <p className="text-[11px] text-stone-400 font-sans">
                You can still order directly without login using our instant WhatsApp prescription form!
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-[#141414] dark:text-stone-200 font-bold hover:underline uppercase text-[11px] tracking-wider"
              >
                <span>Continue as Guest to Medicine Stock</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        )}
      </div>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white dark:bg-stone-900 rounded-sm p-6 shadow-2xl border border-stone-300 dark:border-stone-700 space-y-4 font-mono">
            <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white">Reset Password</h3>
            <p className="text-xs font-sans text-stone-500 leading-relaxed">
              Enter your registered mobile number or email. We will send you an OTP reset link via SMS/WhatsApp.
            </p>

            {forgotSuccess ? (
              <div className="p-4 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Reset OTP link sent to your registered mobile number!</span>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3 text-xs">
                <input
                  type="text"
                  required
                  placeholder="Mobile number or Email"
                  value={forgotIdentifier}
                  onChange={e => setForgotIdentifier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300"
                />
                <div className="flex items-center justify-end gap-2 pt-2 uppercase text-xs">
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(false)}
                    className="px-3.5 py-2 rounded-sm text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-medium"
                  >
                    Send OTP Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
