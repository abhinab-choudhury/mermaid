import { ArrowRightIcon } from "lucide-react";

function Home() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center bg-gray-100/40 dark:bg-gray-900">
      <div className="rounded-2xl flex flex-col justify-center items-center h-[100%]">
        <h1 className="text-3xl font-extralight">Mermaid</h1>
        <p className="pt-3 text-center">
          AI Which helps you wite Mermaid code, comes with a built in render
        </p>
      </div>
      <div className="absolute border border-gray-950 bottom-0 rounded-tr-2xl rounded-tl-2xl w-[80%] md:w-[45vw] bg-gray-100 dark:bg-gray-950 pt-4 px-4">
        <form className="flex flex-row gap-3 bg-gray-200 dark:bg-primary/5 p-3 rounded-sm">
          <textarea
            className="flex-1 p-2 w-full h-12 md:h-20 resize-none text-sm text-black dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
            placeholder="Type your message..."
          ></textarea>
          <button
            type="submit"
            className="ml-auto h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition"
          >
            <ArrowRightIcon className="dark:text-black" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Home;
