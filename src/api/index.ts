const baseUrl: string = "https://api.chucknorris.io";

async function get(url) {
  const response = await fetch(url);
  return await response.json();
}

export function getCategories() {
  return get(`${baseUrl}/jokes/categories`);
}

export function getRandomJoke(category: string) {
  return get(category ? `${baseUrl}/jokes/random?category=${category}` : `${baseUrl}/jokes/random`);
}
