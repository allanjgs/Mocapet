import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mx-auto container h-screen justify-start bg-gray-50 py-4">
        <h1>LandingPage</h1>
        <div className="flex gap-x-4">
          <Button className="w-40"><a className="w-full" href="./auth">Login</a></Button>
          <Button className="w-40"><a className="w-full" href="/">Dashboard</a></Button>
        </div>
      </div>
    </main>
  );
}
