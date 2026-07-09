import { Cormorant_Garamond, DM_Sans } from "next/font/google";

// Display face — used at weight 300, including an italic cut for emphasis.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body/UI face — weight 300 for paragraph copy, medium for nav/buttons.
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});