import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export const NEXT_PUBLIC_NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
export const NEWS_API_KEY = process.env.NEWS_API_KEY;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
