import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        <div className="auth-fields">
          {!isLogin && (
            <div className="auth-field">
              <label className="auth-label">Username</label>
              <div className="auth-input-container">
                <User className="auth-input-icon" />
                <input
                  type="text"
                  className="auth-input"
                  placeholder="Enter your username"
                />
              </div>
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label">Email</label>
            <div className="auth-input-container">
              <Mail className="auth-input-icon" />
              <input
                type="email"
                className="auth-input"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <div className="auth-input-container">
              <Lock className="auth-input-icon" />
              <input
                type="password"
                className="auth-input"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button className="auth-button">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="auth-switch">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="auth-switch-button"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;