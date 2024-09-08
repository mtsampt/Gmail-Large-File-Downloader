import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    // The credential response contains a JWT token
    const token = credentialResponse.credential;

    // Decode the JWT token to get user information
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedData = JSON.parse(atob(base64));

    // Set the user's email or name in the state
    setUserEmail(decodedData.email || decodedData.name);
  };

  return (
    <GoogleOAuthProvider clientId="1080191277295-4p1j7n674rd1ph9aemph5f8bp4nmgk94.apps.googleusercontent.com">
      <div className="App">
        <h1>Gmail Large File Downloader</h1>
        {!userEmail ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        ) : (
          <h2>Current Gmail account: {userEmail}</h2>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
