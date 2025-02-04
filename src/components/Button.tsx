import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="rounded inline-block transition-colors cursor-pointer bg-button">
      <Link
        href={props.href}
        className="text-sm font-medium hover:text-title rounded block transition-colors py-2 px-3"
      >
        {props.text} {">"}
      </Link>
    </div>
  );
}
