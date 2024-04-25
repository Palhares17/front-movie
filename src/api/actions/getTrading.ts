'use server';

import { TypeResultTrading, TypeTranding } from '../types/trading';

export default async function getTrading() {
	const response = await fetch(
		'https://api.themoviedb.org/3/trending/all/week?language=pt-BR',
		{
			headers: {
				method: 'GET',
				accept: 'application/json',
				Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
			},
		}
	);
	const data = (await response.json()) as { results: TypeResultTrading[] };
	const dataResults: TypeResultTrading[] = data.results;

	return dataResults;
}
