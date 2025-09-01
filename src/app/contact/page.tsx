import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-center mt-36">
      <main className="max-w-7xl">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="space-y-2 text-lg mt-8">
              <p>sara.aukner@gmail.com</p>
              <p>+47 465 44 628</p>
              <p className="text-pink-600 hover:text-pink-800"><a href="https://www.linkedin.com/in/saaraat/" target="_blank" rel="noopener noreferrer">LinkedIn: Sara Aukner</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}