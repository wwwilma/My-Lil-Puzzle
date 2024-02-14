// Placeholders for future helpers
export function formatNumber(number: number): string {
    return number.toString();
  }
  
  export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
export const getBoardSize = (cols: number, rows: number): number => cols * rows;

export const generateArray = (cols: number, rows: number): number[] => {
    const size = getBoardSize(cols, rows);
    const array: number [] = [];
    for (let i = 0; i < size; i++) {
        array.push(i + 1);
    }
    return array;
};
