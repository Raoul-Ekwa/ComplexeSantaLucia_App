export const Fonts = {
   Bold : "Quicksand-Bold",
   Light :  " Quicksand-Light",
   Regular :  "Quicksand-Regular",
   SemiBold :  "Quicksand-SemiBold",
   Medium :  "Quicksand-Medium",
   
} as const;

export type FontName = keyof typeof Fonts;
