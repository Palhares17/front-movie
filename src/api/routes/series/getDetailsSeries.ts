import { options } from "@/api/constants/options";

export default async function getDetailsSeries(id: number) {
	const response = await fetch(
		`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`,
		options
	);

	const data = await response.json() as TypeTVShow;
	return data;
}