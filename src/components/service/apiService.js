

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

const baseUrl = 'https://youtube138.p.rapidapi.com/v2/trending'



export const ApiService = {
    async fetching() {}
}