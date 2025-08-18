import useAuth from "@/hook/useAuth";
import { Button } from "./ui/button";

export default function SignInBtn() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {!isAuthenticated && (
        <Button variant="outline">
          <img src="/google.svg" className="w-5 h-5" />
          Login with Google
        </Button>
      )}
    </>
  );
}
