import { Link } from "react-router";

function About() {
  return (
    <section className="h-dvh w-full pt-12 px-4 py-3 flex flex-col justify-center items-center bg-gray-100/40 dark:bg-gray-900/60">
      <h1 className="font-bold">About</h1>
      <Link to="/" className="underline">
        /Home
      </Link>
    </section>
  );
}

export default About;
