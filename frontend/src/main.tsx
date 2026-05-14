import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: import.meta.env.VITE_COGNITO_AUTHORITY,
    client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
    redirect_uri:
        import.meta.env.VITE_COGNITO_REDIRECT_URI || "http://localhost:5173/",
    response_type: import.meta.env.VITE_COGNITO_RESPONSE_TYPE || "code",
    scope: import.meta.env.VITE_COGNITO_SCOPE || "email openid phone",
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
          <App />
      </AuthProvider>
  </StrictMode>,
)
