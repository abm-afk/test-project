import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DateTime } from "luxon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function daysDiff(providedDateString: string) {
  const providedDate = DateTime.fromJSDate(new Date(providedDateString));
  const now = DateTime.now();
  return Math.floor(now.diff(providedDate, "days").toObject().days);
}