import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth/auth";
import Login from "./pages/Login"


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={<Login useAuth={useAuth} />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
            }
          />
          <Route
            path="/user"
            element={
              <RequireAuth>
                <UserPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  let navigate = useNavigate();

  let signin = (newUser) => {
    return fakeAuthProvider.signin(newUser,
      () => {
        setUser(newUser);
        navigate('/user', { replace: true })
      },
      () => {
        setUser(newUser);
        navigate('/admin', { replace: true })
      }
    );
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout, };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function AdminPage() {
  return <h3>Admin</h3>;
}

function UserPage() {
  return <h3>User</h3>;
}
