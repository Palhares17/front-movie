interface TypeParams {
	params: {
		id: string
	}
}

export default function SeriesPage({ params }: TypeParams) {
	return (
		<div>
			<h1>Página de Série {params.id}</h1>
		</div>
	);
}