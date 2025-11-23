import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely.
 * Solves conflicts (e.g., 'p-4' overwriting 'p-2').
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
