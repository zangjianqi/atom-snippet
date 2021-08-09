
// As defined in https://www.w3.org/TR/html5/syntax.html#void-elements
export const VOID_ELEMENTS: string[] = [
	'area',
	'base',
	'br',
	'col',
	'embed',
	'hr',
	'img',
	'input',
	'keygen',
	'link',
	'menuitem',
	'meta',
	'param',
	'source',
	'track',
	'wbr'
  ];
  
  export function isVoidElement(e: string | undefined): boolean {
	return !!e && binarySearch(VOID_ELEMENTS, e.toLowerCase(), (s1: string, s2: string) => s1.localeCompare(s2)) >= 0;
  }

  
  function binarySearch<T>(array: T[], key: T, comparator: (op1: T, op2: T) => number): number {
	let low = 0,
	  high = array.length - 1;
  
	while (low <= high) {
	  const mid = ((low + high) / 2) | 0;
	  const comp = comparator(array[mid], key);
	  if (comp < 0) {
		low = mid + 1;
	  } else if (comp > 0) {
		high = mid - 1;
	  } else {
		return mid;
	  }
	}
	return -(low + 1);
  }
  