import Image from "next/image";

export default function Contact() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-xl w-full">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Contact</h1>
            <div className="space-y-4 text-lg">
              <p>Mail: sara.aukner@gmail.com</p>
              <p>Tlf: +47 465 44 628</p>
              <p className="underline"><a href="https://www.linkedin.com/in/saaraat/" target="_blank" rel="noopener noreferrer">LinkedIn: Sara Aukner</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}