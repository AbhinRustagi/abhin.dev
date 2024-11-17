interface TestimonyProps {
  message: string;
  name: string;
}

export default function Testimony({ message, name }: TestimonyProps) {
  return (
    <div className="p-4 border rounded-xl border-neutral-800 flex-1 flex flex-col justify-between">
      <p className="mb-2 leading-relaxed">{message}</p>
      <p className="text-sm">{name}</p>
    </div>
  );
}
