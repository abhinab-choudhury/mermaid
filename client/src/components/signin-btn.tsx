import useAuth from "@/hook/useAuth";
import { Button } from "./ui/button";

export default function SignInBtn() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {/* <Button type="button" variant="outline">
        <img src="/google.svg" className="w-4 h-4" />
        Continue with Google
      </Button> */}
      {isAuthenticated ? (
        <Button type="button" variant="destructive">
          Log Out
        </Button>
      ) : (
        <Button type="button" variant={"default"}>
          Sign In
        </Button>
      )}
    </>
  );
}
