declare function classNameMaker(block: string, className: string): (element: string, modifiers: { [k: string]: boolean }, ...additionalClasses: string[]) => string;

export default classNameMaker;
