import axios from "axios";

const baseUrl: string = "https://api.chucknorris.io";

export const getCategories = () => axios.get(`${baseUrl}/jokes/categories`);

export const getRandomJoke = (category: string) => axios.get(`${baseUrl}/jokes/random?category=${category}`);
