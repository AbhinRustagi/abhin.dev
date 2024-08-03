import Link from "next/link";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "hi@abhin.dev",
    url: "mailto:hi@abhin.dev",
    icon: faEnvelope,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhinrustagi",
    icon: faLinkedin,
  },
  {
    name: "Github",
    url: "htttps://github.com/AbhinRustagi",
    icon: faGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AbhinRustagi",
    icon: faTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 text-stone-100 py-12 rounded-xl bg-stone-900 px-8">
      <h2 className="text-stone-100 mb-6 text-4xl">
        Let&apos;s have a chat! ☺
      </h2>
      <ul className="flex gap-8 flex-wrap">
        {socials.map((social) => (
          <li key={`social-${social.name}`}>
            <Link
              className="flex items-center text-stone-100 hover:text-stone-500"
              href={social.url}
            >
              <FontAwesomeIcon icon={social.icon} className="mr-2" />
              {social.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
      <small className="font-serif text-sm block mt-8 text-stone-500">
        Designed & developed by Abhin Rustagi. All Rights Reserved &copy; 2024.
      </small>
    </footer>
  );
}
