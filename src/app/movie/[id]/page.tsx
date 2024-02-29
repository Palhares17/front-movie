export default function MoviePage({ params }: { 
	params: { 
		id: string 
	} 
}) {
	return (
		<div>
			<h1>Movie {params.id}</h1>
		</div>
	);
}