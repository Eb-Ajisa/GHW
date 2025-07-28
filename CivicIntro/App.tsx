import { UserButton, CivicAuthProvider } from "@civic/auth/react";
import Confirm from "./components/confirm.tsx";
import './App.css'

function App({children} : any) {
return (
    <>

      <CivicAuthProvider clientId="08ebc91e-0e02-4a99-9711-8efbc01a913f"
        onSignIn={(error? : Error | null) => {
          if (error) {
            console.error("Sign in failed:", error);
            alert(`Sign in failed. Please try again. ${error}`);
          } else {
            console.log("Sign in successful");
            alert("Sign in successful");
          }
        }}
        onSignOut={(error? : Error | null) => {
          if (error) {
            console.error("Sign out failed:", error);
            alert(`Sign out failed. Please try again. ${error}`);
          } else {
            console.log("Sign out successful");
            alert("Sign out successful");
          }
        }}
        nonce= {Math.random().toString(36).substring(2, 15)} 
      >
      <UserButton />
      <Confirm />
      {children}
    </CivicAuthProvider>
    </>
  );
}

export default App


