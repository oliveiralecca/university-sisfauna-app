import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import { api, createUser, userLogin } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  authenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  registerUser: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  user: User | null;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  success: string;
  setSuccess: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthState | null>(null);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const recoveredUser = useMemo(
    () => localStorage.getItem("@sisfauna:user"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  useEffect(() => {
    const token = localStorage.getItem("@sisfauna:token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, [recoveredUser]);

  const login = useCallback(
    async (email: string, password: string) => {
      const response = await userLogin(email, password);

      if (response.status === 400) {
        setLoading(false);
        setError(response.data.error);
        return;
      }

      const loggedUser = response.user;
      const { token } = response;

      localStorage.setItem("@sisfauna:user", JSON.stringify(loggedUser));
      localStorage.setItem("@sisfauna:token", token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setLoading(false);

      setUser(loggedUser);
      navigate("/home");
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("@sisfauna:user");
    localStorage.removeItem("@sisfauna:token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/signin");
  }, [navigate]);

  async function registerUser(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    const response = await createUser(name, email, password, confirmPassword);

    if (response.status === 400) {
      setLoading(false);
      setError(response.data.error);
      return;
    }

    setSuccess(response);
    setLoading(false);
  }

  const values = useMemo(
    () => ({
      authenticated: !!recoveredUser,
      login,
      logout,
      registerUser,
      user,
      error,
      setError,
      success,
      setSuccess,
      loading,
      setLoading,
    }),
    [error, loading, login, logout, recoveredUser, success, user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth context must not be used outside its provider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuthContext };
