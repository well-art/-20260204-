import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2693988') {
      setIsFading(true);
      setTimeout(() => {
        onLogin();
      }, 500); // Wait for fade out
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md fade-in border-t-4 border-enterprise-green">
        <div className="text-center mb-8">
          <div className="bg-enterprise-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-enterprise-green" />
          </div>
          <h1 className="text-2xl font-bold text-enterprise-gray mb-2">企業知識庫中心</h1>
          <p className="text-gray-400 text-sm">請輸入授權密碼以存取內部資料</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                error 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:border-enterprise-green focus:ring-enterprise-green/20'
              }`}
              placeholder="輸入密碼 (2693988)"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs mt-2 ml-1 animate-pulse">
                密碼錯誤，請重新輸入
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-enterprise-green hover:bg-[#1e873a] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-enterprise-green/30"
          >
            登入系統
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2024 Enterprise Knowledge Base. Internal Use Only.
        </div>
      </div>
    </div>
  );
};

export default Login;