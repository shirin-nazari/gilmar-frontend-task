// "use client";

// import { Box } from "@mui/material";
// import Image from "next/image";

// function PuzzleFrame({ src, alt, width = 602, height = 815 }) {
//   return (
//     <Box
//       sx={{
//         width: {
//           xs: "100%",
//           md: width,
//         },

//         height: {
//           xs: "auto",
//           md: height,
//         },
//         maxWidth: 700,
//         aspectRatio: "7 / 5",
//         position: "relative",

//         maskImage: 'url("/masks/puzzle-frame.svg")',
//         maskSize: "100% 100%",
//         maskPosition: "center",
//         maskRepeat: "no-repeat",

//         WebkitMaskImage: 'url("/masks/puzzle-frame.svg")',
//         WebkitMaskSize: "100% 100%",
//         WebkitMaskPosition: "center",
//         WebkitMaskRepeat: "no-repeat",

//         overflow: "hidden",
//       }}
//     >
//       <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
//     </Box>
//   );
// }

// export default PuzzleFrame;
"use client";

import { Box } from "@mui/material";
import Image from "next/image";

type PuzzleFrameProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function PuzzleFrame({
  src,
  alt,
  width = 602,
  height = 815,
}: PuzzleFrameProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,

        maskImage: 'url("/masks/puzzle-frame.svg")',
        maskSize: "100% 100%",
        maskPosition: "center",
        maskRepeat: "no-repeat",

        WebkitMaskImage: 'url("/masks/puzzle-frame.svg")',
        WebkitMaskSize: "100% 100%",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",

        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`(max-width: 900px) 100vw, ${width}px`}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
