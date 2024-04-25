interface TypeSectionHome {
	text: string;
	children: React.ReactNode;
}

export default function SectionHome({text, children}: TypeSectionHome) {
	return (
		<section className={`margin-64`}>
        <h3 className={`h3-32 container`}>{text}</h3>
				{children}
      </section>
	);
}