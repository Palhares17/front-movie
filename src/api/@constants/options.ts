export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};
