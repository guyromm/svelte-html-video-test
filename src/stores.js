import { writable } from 'svelte/store';

export const duration = writable();
export const seekProgress = writable();
export const loadProgress = writable();
export const videoURL = writable();
export const isVideoLoading = writable();
export const videoLoadError = writable();

export default {duration,
		seekProgress,
		loadProgress,
		videoURL,
		isVideoLoading,
		videoLoadError
	       };
