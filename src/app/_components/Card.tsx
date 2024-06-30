import Link from "next/link";

interface CardProps {
  title: string;
  href: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card-base h-full">
      <div className="mb-2 h-8">
        <Link className="font-medium" target="_blank" href={props.href}>
          {props.title}
        </Link>
      </div>
      <div
        className="inline"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
}
