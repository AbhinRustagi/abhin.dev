interface TestimonyProps {
  message: string;
  name: string;
}

export default function Testimony({ message, name }: TestimonyProps) {
  return (
    <div className="rounded-xl p-6 bg-card flex-1 flex flex-col justify-between">
      <p className="mb-2 leading-relaxed text-title">{message}</p>
      <p className="text-sm text-subtitle">{name}</p>
    </div>
  );
}
