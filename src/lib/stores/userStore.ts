// src/lib/stores/userStore.ts
import { writable } from 'svelte/store';
import type { User } from '$lib/types.ts';

export const user = writable<User | null>(null);
