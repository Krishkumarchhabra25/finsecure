import { Playfair_Display } from "next/font/google";
import localFont from 'next/font/local';

export const playfairDisplay = Playfair_Display({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-playfair',
});


export const helveticaNeue = localFont({
  src: [
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Bold.otf',
      weight: '700',
      style: 'normal',
    },
      {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Light.otf',
      weight: '300', // ✅ Light should be 300
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Medium.otf',
      weight: '500', // ✅ Medium
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Roman.otf',
      weight: '400', // ✅ Regular
      style: 'normal',
    },
    {
      path: '../fonts/HelveticaNeue/HelveticaNeue-Thin.otf',
      weight: '200', // ✅ Thin
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
});