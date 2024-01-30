
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotpassword";
import Offers from "./pages/offers";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";






function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>
          <Route  path="/ profile"element={<profile/>}/>
          <Route  path="/sign-in"element={<SignIn/>}/>
          <Route  path="/ sign-up"element={<SignUp/>}/>
          <Route  path="/ forgot-password"element={<ForgotPassword/>}/>
          <Route  path="/ offers"element={<Offers/>}/>
          
        </Routes>
      </Router>

    </>
    
  );
}

export default App;
