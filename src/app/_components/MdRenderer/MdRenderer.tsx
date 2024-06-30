import styles from "./styles.module.css";

interface MdRendererProps {
  content: string;
}

export function MdRenderer({ content }: MdRendererProps) {
  // Convert anchor links to external
  const modifiedContent = content.replaceAll(
    "<a",
    "<a target='_blank' class='after-underline'"
  );

  return (
    <div
      className={styles.renderer}
      dangerouslySetInnerHTML={{ __html: modifiedContent }}
    />
  );
}
