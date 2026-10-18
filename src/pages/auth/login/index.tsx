import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <Card className="p-6 sm:p-8">
      <AuthFormHeader title="Welcome back" description="Sign in to find your next favorite meal." />
      <LoginForm />
      <Link className="mt-6 block text-center text-sm text-terracotta underline underline-offset-4 hover:text-terracotta-dark" to={"/auth/signup"}>
        New here? Create an account
      </Link>
    </Card>
  );
}
