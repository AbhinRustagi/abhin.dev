import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="rounded inline-block transition-colors cursor-pointer p-px">
      <Link
        href={props.href}
        className="block text-sm font-medium bg-button rounded"
      >
        <span className="block transition-colors py-2 px-3 bg-clip-text hover:bg-buttonGradient text-transparent bg-body">
          {props.text}
        </span>
      </Link>
    </div>
  );
}
