import "@/styles/global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "@/pages/user/home";
import RecipePage from "@/pages/user/recipe";
import UserLayout from "@/pages/user/layout";
import AdminLayout from "@/pages/admin/layout";
import AdminPage from "@/pages/admin/home";
import AdminRecipesPage from "@/pages/admin/recipes";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import SignupPage from "@/pages/auth/signup";
import { AuthProvider } from "@/components/context/auth-context";
import { ProtectedRoute, HomeRedirect } from "@/components/context/protected-route";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />

        {/*Auth pages */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* User Panel Pages */}
        <Route element={<ProtectedRoute role="USER" />}>
          <Route element={<UserLayout />}>
            <Route path="/user" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Route>
        </Route>

        {/*Admin Pages */}
        <Route element={<ProtectedRoute role="ADMIN" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="recipes" element={<AdminRecipesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<HomeRedirect />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
