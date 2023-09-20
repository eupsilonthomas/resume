// app/sitemap.js
import { Exercise } from '../typings';
 
import { alphaNumericSort } from '../utils/utils';
 
const URL = process.env.SITE;

const fetchExercises = async() => {
  // random timeout for number of seconds for suspense demo
  //const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  //await new Promise((resolve) => setTimeout(resolve, timeout));
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
    },
  }

  const res = await fetch(`${process.env.CHOLHKAN_API}/exercises?limit=1000`,options);
  const {data} = await res.json() ;

  let exercises = data;
  return exercises;
}
 
export default async function sitemap() {
  let exercises:Exercise[] = [];
  exercises = await fetchExercises();
  exercises.sort((a,b) => a.name.localeCompare(b.name));
  alphaNumericSort(exercises);

  const posts = exercises.map((exercise) => ({
    url: `${URL}/exercises/${exercise.name}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/exercises", "/about"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}