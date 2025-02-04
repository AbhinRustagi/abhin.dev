import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  direction?: "forward" | "backward";
}

export default function Button(props: ButtonProps) {
  const direction = props.direction === "backward" ? "<" : ">";
  const display =
    props.direction === "backward"
      ? direction + " " + props.text
      : props.text + " " + direction;

  return (
    <div className="rounded inline-block transition-colors cursor-pointer bg-button hover:scale-95">
      <Link
        href={props.href}
        className="text-sm font-medium hover:text-title rounded block transition-colors py-2 px-3"
      >
        {display}
      </Link>
    </div>
  );
}
