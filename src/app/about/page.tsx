import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex justify-center">
      <main className="max-w-7xl mt-12 mb-96 px-4 lg:px-24">
        <h1 className="text-4xl font-bold my-12">About</h1>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="relative w-full h-[400px] mb-8 lg:w-[750px] lg:h-[750px] lg:mb-0 lg:ml-32">
            <Image
              src="/sara-profile.jpeg"
              alt="About Me"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6 w-full lg:w-1/2">
            <p>
              Hi! I'm Sara Aukner, a creative UX designer based in Oslo, Norway. I'm currently completing my UX design studies at Noroff School of Technology and Digital Media.
            </p>
            <p>
              Through this journey, I've built strong skills in user-centered design, universal accessibility, and creating intuitive prototypes. My approach is rooted in curiosity and empathy, always aiming to craft seamless digital experiences that make a real difference for users.
            </p>

            <section className="mt-12 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                Go to contact page <Link href="/contact" className="text-pink-600 hover:text-pink-800">here</Link>.
                {/* <p>Let's connect on <a href="https://www.linkedin.com/in/saaraat/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">LinkedIn</a></p>
                <p>Or e-mail: <span className="text-pink-600">sara.aukner@gmail.com</span></p> */}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <h3 className="text-lg mt-4">UX-design</h3>
                <p>Noroff School of Technology and Digital Media <br /><span className="text-gray-500">2024 - currently</span></p>
                <h3 className="text-lg mt-4">Masters, Social Anthropology</h3>
                <p>Norwegian University of Science and Technology <br /><span className="text-gray-500">2019 - 2022</span></p>
                <h3 className="text-lg mt-4">Bachelor, Social Anthropology</h3>
                <p>Norwegian University of Science and Technology <br /><span className="text-gray-500">2016 - 2019</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Recent Work Experience</h2>
                <h3 className="text-lg mt-4">CEO</h3>
                <p>Full Vase <br /><span className="text-gray-500">2024 - Current job</span></p>
                <h3 className="text-lg mt-4">HR Consultant</h3>
                <p>Futuragruppen <br /><span className="text-gray-500">2023 - 2025</span></p>
                <h3 className="text-lg mt-4">Recruitment Consultant</h3>
                <p>Pilar Personell <br /><span className="text-gray-500">2022 - 2023</span></p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Microsoft Office</li>
                  <li>Figma</li>
                  <li>Figjam</li>
                  <li>Canva</li>
                  <li>Google Sheets</li>
                  <li>Lightroom</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

