import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function gnRandomNum(min: number, max: number, exclude: number = 0) {
  if (min === max) {
    return min;
  }
  if (max - min <= 1 && (min === exclude || max === exclude)) {
    return min;
  }
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return gnRandomNum(min, max, exclude);
  } else {
    return randomNumber;
  }
}
