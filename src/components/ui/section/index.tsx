interface TypeSection {
  text: string;
  children: React.ReactNode;
}

export default function Section({ text, children }: TypeSection) {
  return (
    <section className={`margin-64`}>
      <h3 className={`h3-32 container`}>{text}</h3>
      {children}
    </section>
  );
}
