'use client'

import { ReactNode, useState } from "react";
import { ClipboardIcon, EmailIcon, ExternalLinkIcon, LinkedInIcon, PhoneIcon } from "../components/icons";

interface LinkEntryProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

function ExternalLinkEntry({ icon, label, href }: LinkEntryProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      <div className="flex space-x-1 link">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex space-x-1 text-lg font-semibold"
        >
          <p>{label}</p><ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

function ClipboardEntry({ icon, label }: { icon: ReactNode, label: string }) {
  const handleClipboardClick = async () => {
    // todo: You could add a toast notification here if you want
    navigator.clipboard.writeText(label);
  };
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      <button onClick={handleClipboardClick} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
        <p>{label}</p><ClipboardIcon />
      </button>
    </div>
  );
}

function PhoneNumberEntry({ icon, label }: { icon: ReactNode, label: string }) {
  const [revealed, setRevealed] = useState(false);
  const handlePhoneNumberClick = () => {
    navigator.clipboard.writeText(label.replace(/\s/g, ''));
  };
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-slate-700">
        {icon}
      </div>
      {revealed ? (
        <button onClick={handlePhoneNumberClick} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
          <p>{label}</p><ClipboardIcon />
        </button>
      ) : (
        <button onClick={() => setRevealed(true)} className="flex space-x-1 text-lg font-semibold cursor-pointer link">
          <p>Reveal</p>
        </button>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex justify-center mt-36">
      <main className="max-w-7xl">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl text-slate-700">Contact</h1>
            <div className="mt-8 space-y-4 text-lg">
              <ExternalLinkEntry
                icon={<LinkedInIcon className="w-8 text-white" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/saaraat/"
              />
              <ClipboardEntry
                icon={<EmailIcon className="w-8 text-white" />}
                label="sara.aukner@gmail.com"
              />
              <PhoneNumberEntry
                icon={<PhoneIcon className="w-8 text-white" />}
                label="+47 465 44 628"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}