import type { PageLoad } from './$types';
import type { Article } from '$lib/types';


export const load: PageLoad = async ({ fetch, params }) => {
  console.log('Fetching article with ID:', params.id);
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/articles/${params.id}`);
    const article = await res.json();
    if (res.ok) {
      console.log('Article fetched successfully:', article);
      return { props: { article } };
    } else {
      console.error('Failed to fetch article. Status:', res.status);
      return { props: { article: null } };
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    return { props: { article: null } };
  }
}
