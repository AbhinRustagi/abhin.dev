interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return <div className="mx-auto px-5 lg:px-0 max-w-2xl">{props.children}</div>;
}
