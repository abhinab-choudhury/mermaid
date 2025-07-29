import useAuth from "@/hook/useAuth";
import { Button } from "./ui/button";

export default function SignInBtn() {
  const { isAuthenticated } = useAuth();
  return (
    <>
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
