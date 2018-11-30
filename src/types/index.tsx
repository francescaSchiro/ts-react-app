/* DEFINING OUR APP STATE ---------------------------------------------------------
Define the shape of the state which Redux will store.
For this, we can create a file called src/types/index.tsx
which will contain DEFINITIONS FOR TYPES that we might use throughout the program.
---------------------------------------------------------------------------------- */

export interface StoreState {
  languageName: string; // the programming language this app was written in (i.e. TypeScript or JavaScript)
  enthusiasmLevel: number; // will vary
}
