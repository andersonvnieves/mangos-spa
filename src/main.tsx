import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from "react-oidc-context";
import App from './App.tsx'

const cognitoAuthConfig = {
    authority: "https://cognito-idp.sa-east-1.amazonaws.com/sa-east-1_oEchf8sJw",
    client_id: "5tu7j65i3d66r1qtrlu8k7os91",
    redirect_uri: "http://localhost:5173/",
    response_type: "code",
    scope: "email openid",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
          <App />
      </AuthProvider>
  </StrictMode>,
)
