type DateFormatOptions = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

export default function Footer() {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as DateFormatOptions;

  return (
    <footer className="py-12" id="#contact">
      <p className="text-sm">
        Made with ☕️ by Abhin Rustagi. Last updated{" "}
        {new Date().toLocaleDateString("en-US", dateOptions)}
      </p>
    </footer>
  );
}
