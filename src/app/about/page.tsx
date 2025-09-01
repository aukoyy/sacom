import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-xl w-full">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">About</h1>
            <p className="text-lg">

            </p>
          </div>
        </div>
      </main>
    </div>
  );
}