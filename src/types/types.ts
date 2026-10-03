export type FeatureCardProps = {
  emoji?: string;
  image?: string;
  title: string;
  text: string;
  rotate: number;
  dy: number;
};

export type SectionHeadingProps = {
  icon: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  maxWidth?: number;
};

export type SectionBadgeProps = {
  icon: string;
  size?: number;
};

export type GridPatternProps = {
  src?: string;
  opacity?: number;
  verticalAlign?: "start" | "center" | "end";
  horizontalAlign?: "start" | "center" | "end";
  size?: string;
  repeat?: string;
  width?: string;
  height?: string;
};

export type MaskedImageProps = {
  src: string;
  alt: string;
  maskSrc: string;
  width?: string | number;
  height?: string | number;
};
