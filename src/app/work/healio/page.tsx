import Image from "next/image";
import React from "react";

const HealioPortfolioPage = () => (
  <main className="max-w-3xl mx-auto p-8 mb-24">
    <Image src="/healio/scene.png" alt="Healio App" width={800} height={450} />
    <h1 className="text-2xl font-bold mt-4 mb-2">Healio App</h1>
    <p><strong>Role:</strong> UX Designer</p>
    <p><strong>Type:</strong> Course assignment at Noroff, spring 2025</p>
    <p><strong>Tools:</strong> Figma, Pitch, Canva</p>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">Background</h2>
    <p>For this assignment, our group designed <strong>Healio</strong>, a mobile app supporting people recovering from shoulder injuries. Healio helps users track their physical progress, log habits, complete physiotherapy exercises, and reduce stress with guided meditation.</p>
    <div className="my-4">
    </div>
    <p>Our goal was to create a <strong>user-centered experience</strong> that motivates recovery while also collecting valuable data for medical research. The process included persona development, information architecture, user flows, and both low- and high-fidelity prototypes.</p>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">Goal</h2>
    <p>Healio needed to balance <strong>motivation and usability</strong>: the app should encourage patients through a long recovery journey while providing clear, glanceable feedback on their progress. At the same time, it had to remain simple and intuitive, reducing frustration for users already dealing with pain or limited mobility.</p>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">The Process</h2>
    <p>We used the <strong>Design Thinking Process</strong>, starting with a detailed persona, “Chris Harper”, a 37-year-old designer and former competitive swimmer recovering from shoulder surgery.</p>
    <div className="my-4">
      <Image src="/healio-persona.png" alt="Persona Chris Harper" width={800} height={450} />
    </div>
    <p>His frustrations with tracking exercises and uncertainty about progress shaped our design challenges.</p>
    <div className="my-4">
      <Image src="/healio-challenges.png" alt="Healio Challenges" width={800} height={450} />
    </div>
    <p>We created an information architecture and user flow for Healio’s onboarding. This ensured clear navigation, prioritized key features, and gave users a smooth start before moving into prototypes.</p>
    <div className="my-4">
      <Image src="/healio-userflow.png" alt="Healio User Flow" width={800} height={450} />
    </div>
    <p>Through <strong>competitive analysis (SWOT) and ideation</strong>, we found a gap in the market for a motivating, personalized recovery app.</p>
    <div className="my-4">
      <Image src="/healio-swot.png" alt="Healio SWOT" width={800} height={450} />
    </div>
    <p>As a group we brainstormed solutions, sketched concepts, and built multiple <strong>low-fi prototypes</strong> to explore options for login, pain tracking, and progress visualization.</p>
    <p>
      <a href="https://www.figma.com/proto/uolZEYnmGZMhUwaPpK0XI5/Noroff?node-id=1369-8530&p=f&t=KeFOs2h052kCKAX9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1369%3A8530&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View prototype in Figma &rarr;</a>
    </p>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">Design Principles</h2>
    <ul className="list-disc list-inside ml-4">
      <li><strong>Accessibility (WCAG AA):</strong> Color contrast checked, touch-friendly elements, and support for users with motor/visual impairments.</li>
      <div className="my-4">
        <Image src="/healio-accessibility.png" alt="Healio Accessibility" width={800} height={450} />
      </div>
      <li><strong>Consistency:</strong> Unified icons, typography, and layouts across flows.</li>
      <div className="my-4">
        <Image src="/healio-consistency.png" alt="Healio Consistency" width={800} height={450} />
      </div>
      <li><strong>Clarity & Simplicity:</strong> Calm, minimal design that reduces cognitive load.</li>
      <li><strong>Emotional Design:</strong> Friendly illustrations and encouraging language.</li>
      <li><strong>Empowering UX:</strong> Progress tracking, reminders, and routines that give users control.</li>
    </ul>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">Result</h2>
    <p>The final <strong>high-fidelity prototype</strong> of Healio provides a <strong>calm, motivating, and accessible recovery experience</strong>. From onboarding through progress tracking, the app maintains a consistent visual language and user-friendly flow, ensuring users can focus on recovery instead of navigating complexity.</p>
    <div className="my-4 grid grid-cols-1 gap-4">
      <Image src="/healio-result1.png" alt="Healio Result 1" width={800} height={450} />
      <Image src="/healio-result2.png" alt="Healio Result 2" width={800} height={450} />
      <Image src="/healio-result3.png" alt="Healio Result 3" width={800} height={450} />
      <Image src="/healio-result4.png" alt="Healio Result 4" width={800} height={450} />
    </div>
    <p className="mt-4">Selected screens from the Healio app, highlighting its calm visual style, consistent navigation, and motivating recovery features.</p>
    <p>
      <a href="https://www.figma.com/proto/uolZEYnmGZMhUwaPpK0XI5/Noroff?node-id=1277-9720&p=f&t=J9IwW4S0rBDaKR1J-1&scaling=min-zoom&content-scaling=fixed&page-id=770%3A2435&starting-point-node-id=1277%3A9720" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View full prototype in Figma &rarr;</a>
    </p>
    <hr className="my-6" />

    <h2 className="text-lg font-bold mt-8">What I Learned</h2>
    <p>This project strengthened my skills in:</p>
    <ul className="list-disc list-inside ml-4">
      <li><strong>User-centered design:</strong> designing for a real persona with specific recovery challenges.</li>
      <li><strong>Accessibility & consistency:</strong> applying WCAG AA checks and creating predictable patterns.</li>
      <li><strong>Collaboration:</strong> aligning with a team on flows, interactions, and visual style.</li>
    </ul>
    <div className="my-4">
      <Image src="/healio-learned.png" alt="Healio What I Learned" width={800} height={450} />
    </div>
    <p>Overall, Healio was a valuable exercise in creating an <strong>inclusive, motivating app experience</strong> for users facing physical and emotional challenges in their daily lives.</p>
  </main>
);

export default HealioPortfolioPage;