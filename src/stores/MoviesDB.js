import { writable } from "svelte/store";
import { key } from "./key.js";
export const moviedb = writable([]);
// @ts-ignore
export const fetchDatabase = async(query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    return data
};