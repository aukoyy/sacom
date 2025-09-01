import { EB_Garamond } from "next/font/google";
import Image from "next/image";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex justify-center mt-24">
      <main className="max-w-7xl">

        <div className="flex space-x-8">
          <Image
            className="dark:invert"
            src="/notion-avatar.svg"
            alt="Avatar of Sara"
            width={180}
            height={38}
            priority
          />
          <div>
            <h1 className={`text-4xl ${ebGaramond.variable}`}>Hello!</h1> {/* todo: the font does not work */}
            <p className="text-lg">I am <a href="/about" className="text-pink-600 hover:text-pink-800">Sara</a>, <br />a designer/<br />UX-designer<br />based in Oslo.</p>
          </div>
        </div>


        <h2 className="text-3xl mt-24 text-gray-600">Work</h2>
        <section className="mt-8">
          <Image
            className="dark:invert"
            src="/moveIt-app.png"
            alt="MoveIt App"
            width={360}
            height={150}
            priority
          />
          <div className="flex justify-between mt-2">
            <h2 className="text-2xl">MoveIt App</h2>
            <a className="text-pink-600  rounded hover:text-pink-800" href="/work/moveIt">View project</a>
          </div>
        </section>
      </main>
    </div>
  );
}
