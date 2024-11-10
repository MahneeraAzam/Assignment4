import { Libre_Bodoni } from 'next/font/google';

export const libreBodoni = Libre_Bodoni({
  weight: '400',        // Choose the appropriate weight (normal, regular, etc.)
  subsets: ['latin'],   // Define the character sets
  display: 'swap',      // Font loading strategy
});
