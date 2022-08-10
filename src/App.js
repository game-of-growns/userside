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
import Admin from "./layout/Admin";
import UserPage from "./pages/UserPage";
import UserManagement from "./pages/AdminPages/UserManagement";


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
            path="/admin/*"
            element={
              <RequireAuth>
                <Admin />
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

function Test() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          نمونه کارت
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          متن
        </div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          نمونه کارت
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          متن
        </div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-sm font-medium text-gray-500 truncate">
          نمونه کارت
        </div>
        <div className="mt-1 text-3xl font-semibold text-gray-900">
          متن
        </div>
      </div>
    </div>
  );
}