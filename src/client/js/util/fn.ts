export const activeClass = (check: boolean, mainClass: string) => check ? 
	`${mainClass} ${mainClass}-active` : mainClass;
