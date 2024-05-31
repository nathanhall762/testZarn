export const capitalizeString = (str: string): string => {
	const words = str.split(" ");
	const capitalizedWords = words.map((word, index) => {
		if (index === 0) {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		} else if (isPreposition(word)) {
			return word.toLowerCase();
		} else {
			const firstLetter = word.charAt(0).toUpperCase();
			const restOfWord = word.slice(1).toLowerCase();
			return firstLetter + restOfWord;
		}
	});
	return capitalizedWords.join(" ");
};
  
  const isPreposition = (word: string): boolean => {
	const prepositions = ["a", "an", "the", "in", "on", "at", "to", "for", "with", "of", "by"];
	return prepositions.includes(word.toLowerCase());
  };