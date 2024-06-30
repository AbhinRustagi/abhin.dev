import { IProject, StatusType } from "@/lib/project";
import Link from "next/link";
import ExtLink from "./ExtLink";

interface StatusProps {
  type: StatusType;
}

const Status = (props: StatusProps) => {
  const styles = {
    retired: "bg-pink-500/50 border-pink-500",
    "in progress": "bg-yellow-500/50 border-yellow-500",
  };

  return (
    <div
      className={`absolute top-2 right-2 text-white rounded-xl py-1 px-2 text-[0.625rem] font-mono border ${
        styles[props.type]
      }`}
    >
      {props.type}
    </div>
  );
};

interface CardProps extends IProject {}

export default function Card(props: CardProps) {
  return (
    <div className="card-base h-full relative">
      {props.status && <Status type={props.status} />}
      <div className="mb-2 h-8">
        <Link className="font-medium" target="_blank" href={props.href}>
          {props.title} <ExtLink />
        </Link>
      </div>
      <div
        className="inline"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
}
