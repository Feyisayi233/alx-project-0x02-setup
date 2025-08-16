import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to ALX Project 2!</h2>
        <p className="text-lg">
          This is a Next.js app with TypeScript and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
