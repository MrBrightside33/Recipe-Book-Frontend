import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { SignupForm } from "@/components/features/auth/signup-form";

export default function SignupPage() {
  return (
    <Card className="p-6 sm:p-8">
      <AuthFormHeader title="Create your account" description="A little inspiration for your everyday cooking." />
      <SignupForm />
      <Link className="mt-6 block text-center text-sm text-terracotta underline underline-offset-4 hover:text-terracotta-dark" to={"/auth/login"}>
        Already have an account? Sign in
      </Link>
    </Card>
  );
}
