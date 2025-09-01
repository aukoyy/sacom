import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex space-x-8">
          <Image
            className="dark:invert"
            src="/avatar.jpg"
            alt="Avatar of Sara"
            width={180}
            height={38}
            priority
          />
          <div>
            <h1 className="text-4xl">Hello!</h1>
            <p className="text-lg">I am <a href="/about" className="text-green-600">Sara</a>, <br />a designer/<br />UX-designer<br />based in Oslo.</p>
          </div>
        </div>

      </main>

    </div>
  );
}
