export default function MovieIdPage({ params }: { params: { id: number } }) {
  return (
    <div>
			<h1>Série: {params.id}</h1>
		</div>
  );
}
