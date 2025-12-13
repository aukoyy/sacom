'use client';

import Image from "next/image";
import { useRef } from "react";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export default function HomeClient() {
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleImageClick = () => {
    clickCountRef.current += 1;

    if (clickCountRef.current === 3) {
      // Triple click detected!
      window.location.href = 'https://oyvindaukner.com';
      clickCountRef.current = 0; // Reset counter
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    } else {
      // Reset counter after 500ms if no more clicks
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      clickTimeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 500);
    }
  };

  return (
    <div className="flex justify-center my-24 px-4">
          <main className="max-w-7xl">
    
            <div className="flex space-x-8 justify-center items-center">
              <Image
                src="/notion-avatar.svg"
                alt="Avatar of Sara"
                width={180}
                height={38}
                priority
                onClick={handleImageClick}
              />
              <div>
                <h1 className={`text-4xl ${ebGaramond.variable}`}>Hello!</h1> {/* todo: the font does not work */}
                <p className="text-lg">I am <a href="/about" className="text-pink-600 hover:text-pink-800">Sara</a>, <br />a UX-designer<br />based in Oslo.</p>
              </div>
            </div>
    
    
            <h2 className="text-3xl mt-24 text-gray-600">Work</h2>
            <section className="mt-8 space-y-12">
              <div>
                <Image
                  className="rounded-lg"
                  src="/hverdagshelten/cover-photo.png"
                  alt="Hverdagshelten App"
                  width={600}
                  height={150}
                  priority
                />
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl">Hverdagshelten App</h2>
                  <a className="text-pink-600  rounded hover:text-pink-800" href="/work/hverdagshelten">View project</a>
                </div>
              </div>
    
              <div>
                <Image
                  className="rounded-lg"
                  src="/moveIt/smartwatch.png"
                  alt="MoveIt App"
                  width={600}
                  height={150}
                  priority
                />
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl">MoveIt App</h2>
                  <a className="text-pink-600  rounded hover:text-pink-800" href="/work/moveIt">View project</a>
                </div>
              </div>
    
              <div>
                <Image
                  className="rounded-lg"
                  src="/healio/scene.png"
                  alt="Healio Scene"
                  width={600}
                  height={150}
                />
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl">Healio App</h2>
                  <a className="text-pink-600  rounded hover:text-pink-800" href="/work/healio">View project</a>
                </div>
              </div>
            </section>
    
          </main>
        </div>
  );
}