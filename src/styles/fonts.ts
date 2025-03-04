export const Fonts = {
   Bold : " TitilliumWeb-Bold",
   Light : "TitilliumWeb-Light",
   Regular : "TitilliumWeb-Regular",
   SemiBold : "TitilliumWeb-SemiBold",
   Black : "TitilliumWeb-Black",
   BoldItalic : "TitilliumWeb-BoldItalic",
   ExtraLight : "TitilliumWeb-ExtraLight",
   ExtraLightItalic : "TitilliumWeb-ExtraLightItalic",
   Italic : "TitilliumWeb-Italic",
   LightItalic : "TitilliumWeb-LightItalic",
   SemiBoldItalic : "TitilliumWeb-SemiBoldItalic"
} as const;

export type FontName = keyof typeof Fonts;
