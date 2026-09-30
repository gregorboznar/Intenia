import { fetchWP } from './wp-ssr';

export async function getGalleryImages() {
  try {
    return await fetchWP('galleries');
  } catch (error: any) {
    if (error.message?.includes('fetch failed')) {
      throw new Error('Network error: Unable to connect to WordPress API. Please check your internet connection and the API endpoint.');
    }
    throw error;
  }
}
