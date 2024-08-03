import Link from "next/link";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
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
    <footer className="mt-12 border-t border-t-gray-300 pt-12">
      <h2 className="mb-10 text-4xl">Let&apos;s have a chat!</h2>
      <p className="mb-6 text-xl">
        <Link
          className="font-bold flex items-center"
          href="mailto:hi@abhin.dev"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          hi@abhin.dev
        </Link>
      </p>
      <ul className="uppercase font-semibold flex gap-8 flex-wrap">
        {socials.map((social) => (
          <li key={`social-${social.name}`}>
            <Link className="font-bold flex items-center" href={social.url}>
              <FontAwesomeIcon icon={social.icon} className="mr-2" />
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
      <small className="font-serif text-sm block mt-8">
        Designed & developed with ☕️ by Abhin Rustagi. All Rights Reserved
        &copy; 2024.
      </small>
    </footer>
  );
}
