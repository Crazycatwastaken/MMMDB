import { writable } from "svelte/store";
import { key } from "./key.js";
export const moviedb = writable([]);
// @ts-ignore
export const fetchDatabase = async() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    return data
};