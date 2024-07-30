import Navbar from "./ui/navbar";
import Body from "./ui/body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-32">
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Body />
      </div>
    </main>
  );
}
