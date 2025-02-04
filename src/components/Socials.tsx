import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Email",
    link: "mailto:hi@abhin.dev",
    Icon: FaEnvelope,
    display: "hi@abhin.dev",
    background: "bg-green-400/60",
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
    Icon: FaXTwitter,
    background: "bg-neutral-800",
  },
  {
    name: "Bluesky",
    link: "",
    Icon: FaBluesky,
    background: "bg-blue-500",
  },
];

export default function Socials() {
  return (
    <div className="mb-10">
      <ul className="flex gap-4 flex-wrap">
        {socials.map(({ name, link, Icon, display, background }) => (
          <li key={name} className="transition-transform hover:scale-95">
            <Link
              href={link}
              className={`flex h-full py-2 text-white px-3 items-center justify-center rounded-md text-sm font-medium ${background}`}
            >
              <Icon className={`h-4 w-4 ${display && "mr-3"}`} />
              {display && display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
