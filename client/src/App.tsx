// import { hcWithType } from "server/dist/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./components/layout/app-layout";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import { ThemeProvider } from "./provider/theme-provider";
import { ModeToggle } from "./components/toggle-theme-btn";
import SignInBtn from "./components/signin-btn";

// const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

// const client = hcWithType(SERVER_URL);

// type ResponseType = Awaited<ReturnType<typeof client.hello.$get>>;

function App() {
  // const [data, setData] = useState<Awaited<ReturnType<ResponseType["json"]>> | undefined>()

  // async function sendRequest() {
  //   try {
  //     const res = await client.hello.$get()
  //     if (!res.ok) {
  //       console.log("Error fetching data")
  //       return
  //     }
  //     const data = await res.json()
  //     setData(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "setting", Component: Setting },
        {
          path: "c",
          children: [{ index: true, path: ":chatid", Component: Chat }],
        },
        {
          path: "h",
          children: [{ index: true, path: ":historyid", Component: Chat }],
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
        <div className="absolute flex gap-3 top-5 right-3 z-10">
          <SignInBtn />
          <ModeToggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
