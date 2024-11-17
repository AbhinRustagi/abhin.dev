import Link from "next/link";
import { Heading } from "./Text";
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    name: "Email",
    link: "mailto:hi@abhin.dev",
    Icon: FaEnvelope,
    display: "hi@abhin.dev",
    background: "bg-green-400/80",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhinrustagi/",
    Icon: FaLinkedinIn,
    background: "bg-sky-800",
  },
  {
    name: "GitHub",
    link: "https://www.github.com/AbhinRustagi",
    Icon: FaGithub,
    background: "bg-gray-700",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/AbhinRustagi",
    Icon: FaTwitter,
    background: "bg-blue-400",
  },
];

export default function Footer() {
  return (
    <footer className="py-20 md:py-24" id="#contact">
      <div className="p-8 rounded-xl bg-card border border-neutral-800">
        <Heading.H1 className="mb-3">Let&apos;s chat 💬</Heading.H1>
        <p className="mb-6">
          I&apos;m always open to new opportunities and collaborations. <br />
          Feel free to reach out to me.
        </p>
        <ul className="flex gap-4 flex-wrap">
          {socials.map(({ name, link, Icon, display, background }) => (
            <li key={name} className="transition-transform hover:scale-95">
              <Link
                href={link}
                className={`flex h-full py-2 text-white px-3 items-center justify-center rounded-md text-sm ${background}`}
              >
                <Icon className={`h-4 w-4 ${display && "mr-3"}`} />
                {display && display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
