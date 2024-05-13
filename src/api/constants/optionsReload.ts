export const optionsReload = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  },
	next: {
		revalidate: 60 * 60 * 24 // 24 hours
	}
};