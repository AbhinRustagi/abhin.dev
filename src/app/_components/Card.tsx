import Link from "next/link";

type StatusType = "retired" | "in progress";

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

interface CardProps {
  title: string;
  href: string;
  description: string;
  status?: StatusType;
}

export default function Card(props: CardProps) {
  return (
    <div className="card-base h-full relative">
      {props.status && <Status type={props.status} />}
      <div className="mb-2 h-8">
        <Link className="font-medium" target="_blank" href={props.href}>
          {props.title}{" "}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
      <div
        className="inline"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
}
