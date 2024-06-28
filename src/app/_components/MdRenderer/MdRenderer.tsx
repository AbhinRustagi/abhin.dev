import styles from "./styles.module.css";

interface MdRendererProps {
  content: string;
}

export function MdRenderer({ content }: MdRendererProps) {
  return (
    <div
      className={styles.renderer}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
