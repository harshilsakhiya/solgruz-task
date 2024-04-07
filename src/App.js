import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyOtp from "./components/VerifyOtp";
import AuthLayout from "./components/layout/AuthLayout";
import Layout from "./components/layout/Layout";
import SignInSignUp from "./pages/SIgnInSIgnUp";
import Dashboard from "./pages/dashboard";
import PublicRoute from "./helper/PublicRoute";
import PrivateRoute from "./helper/PrivateRoute";
import Artist from "./pages/artist/Artist";


const withPrivacy = (component) => {
  return <PrivateRoute component={component} />;
};

const withoutPrivacy = (component) => {
  return <PublicRoute component={component} />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={withoutPrivacy(SignInSignUp)} />
            <Route path="/verify-otp" element={withoutPrivacy(VerifyOtp)} />
            <Route
              path="/forgot-password"
              element={withoutPrivacy(ForgotPassword)}
            />
            <Route
              path="/reset-password"
              element={withoutPrivacy(ResetPassword)}
            />
          </Route>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={withPrivacy(Dashboard)} />
            <Route path="/event" element={withPrivacy(Artist)} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
