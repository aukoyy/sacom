import Image from "next/image";
import React from "react";

const MoveItPortfolioPage = () => (
  <main className="max-w-3xl mx-auto p-8 mb-24">

    <Image src="/moveIt-app.png" alt="MoveIt App" width={800} height={450} />

    <h1 className="text-xl font-bold mt-4">MoveIt App</h1>

    <p><strong>Role:</strong> UX-designer</p>

    <p><strong>Type:</strong> Course assignment at Noroff, winter 2025</p>

    <p><strong>Tools:</strong> Figma, Canva</p>

    <h2 className="text-lg font-bold mt-8">Background</h2>

    <p>For this  course assignment, our group designed a <strong>fitness app for both mobile and smartwatch</strong>, tailored to the needs of our persona “Jarno”, a busy, tech-savvy design manager. The app helps him stay consistent with simple, no-equipment workouts and track his heart health over time.</p>

    <h2 className="text-lg font-bold mt-8">Goal</h2>

    <p>The mobile app offers detailed features like workout search and progress tracking, while the smartwatch provides quick access to key stats and reminders. Our goal was to create a seamless, user-friendly experience across both devices, supporting Jarno’s active lifestyle.</p>

    <Image src="/moveIt-wireframe1.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4" />

    <h2 className="text-lg font-bold mt-8">The process</h2>

    <p>Using the Design Thinking Process we created Jarno, our persona that we were designing for. This helped us empathize and quickly define the challenges, which led us to come up with ideas.</p>

    <p className="mt-4">After ideating and scetching, we were down to two low-fi prototypes, and we had to choose one. By appying the NUF technique on our low-fi prototypes we as a team conluded with that we were to go with the one idea for the app.</p>

    <Image src="/moveIt-nuff.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4" />

    <p>In designing for the smartwatch screen, we prioritized high-contrast, glanceable colours on dark backgrounds. Clearly differentiated colours help users instantly identify interactive elements, reducing cognitive load during quick interactions.</p>

    <Image src="/moveIt-color-pallette.png" alt="MoveIt Smartwatch" width={400} height={400} className="mt-4 mx-auto" />
    <Image src="/moveIt-user-flow.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4 mx-auto" />

    <h2 className="text-lg font-bold mt-8">Result</h2>

    <p>The MoveIt app successfully meets the needs of our tech-savvy persona, Jarno, by delivering a focused and accessible fitness experience across mobile and smartwatch devices. After comparing two design directions, one version emerged as the strongest concept, thanks to its clear visual hierarchy, guided progression, and consistent structure, supporting Jarno’s fast-paced lifestyle.</p>

    <Image src="/moveIt-wireframe3.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4 mx-auto" />
    <Image src="/moveIt-prototype-watch.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4 mx-auto" />
    <Image src="/moveIt-prototype.png" alt="MoveIt Smartwatch" width={800} height={400} className="mt-4 mx-auto" />

    <h2 className="text-lg font-bold mt-8">What I have learned</h2>

    <p>This project strengthened my skills in <strong>multi-device design</strong>, accessibility, and user-centered thinking. I gained confidence in applying methods like <strong>NUF evaluation</strong> to guide decisions, creating glanceable smartwatch interfaces, and collaborating effectively as a team. Overall, it was a great exercise in designing a consistent, intuitive experience across platforms.</p>
  </main>
);

export default MoveItPortfolioPage;