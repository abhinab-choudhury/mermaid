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
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2 border-gray-300 hover:bg-gray-100 text-sm font-medium px-4 py-2"
        >
          <img src="/google.svg" className="w-5 h-5" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}
