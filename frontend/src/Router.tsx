import { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuthContext } from "./contexts/authContext";
import { DataProvider } from "./contexts/dataContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Page404 } from "./pages/404";
import { Dashboard } from "./pages/Dashboard";
import { FormPage } from "./pages/FormPage";

type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticated } = useAuthContext();

  if (!authenticated) return <Navigate to="/signin" />;

  return <DataProvider>{children}</DataProvider>;
}

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<FormPage type="signin" />} />
          <Route path="/registrar" element={<FormPage type="register" />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DefaultLayout />
              </PrivateRoute>
            }
          >
            <Route path="/home" element={<Dashboard />} />
            <Route path="/sobre" element={<div>sobre o projeto</div>} />
            <Route path="/contato" element={<div>contato</div>} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
