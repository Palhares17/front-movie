export default function SeriesPage({params}: {
	params: {
		id: string
	}
}) {
	return (
		<div>
			<h1>Página de Série {params.id}</h1>
		</div>
	);
}