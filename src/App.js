import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css'; // We'll add some custom styles here
import FolderSelectButton from './components/FolderSelectButton';
import FolderSelector from './components/FolderSelector';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedData = JSON.parse(atob(base64));
    setUserEmail(decodedData.email || decodedData.name);
  };

  return (
    <GoogleOAuthProvider clientId="1080191277295-4p1j7n674rd1ph9aemph5f8bp4nmgk94.apps.googleusercontent.com">
      <div className="app-container">
        <div className="login-box">
          <h1 className="app-title">Welcome to Gmail Sign-In</h1>
          <p className="app-description">
            Sign in with your Google account to view your Gmail account information.
          </p>
          {!userEmail ? (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
              theme="outline"
              size="large"
            />
          ) : (
            <div className="welcome-message">
              <h2>Welcome back!</h2>
              <p className="user-email">Current Gmail account: {userEmail}</p>
              <FolderSelector />
              <FolderSelectButton />

            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
