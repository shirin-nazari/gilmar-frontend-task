import { Box, Button as MuiButton } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type CustomButtonProps = {
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  title: string;
  iconBackground?: boolean;
  iconPosition?: "left" | "right";
  buttonBackground?: string;
  iconBackgroundColor?: string;
  sx?: SxProps<Theme>;
};

const CustomButton = ({
  href,
  onClick,
  icon,
  title,
  iconPosition = "left",
  sx,
  iconBackground,
  buttonBackground = "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%),radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
  iconBackgroundColor = " linear-gradient(161.17deg, #FFFFFF 12.7%, #BAC8D1 91.04%)",
}: CustomButtonProps) => {
  const iconElement = iconBackground ? (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: 32,
        height: 32,
        borderRadius: "50%",
        mx: "auto",
        background: iconBackgroundColor,
      }}
    >
      {icon}
    </Box>
  ) : (
    icon
  );
  return (
    <MuiButton
      href={href}
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: 999,
        gap: 2,
        fontWeight: 800,
        fontSize: "14px",
        color: "white",
        py: 1,
        // px: 2,
        background: buttonBackground,
        display: "inline-flex",
        ...sx,
      }}
    >
      {iconPosition === "left" && iconElement}

      {title}

      {iconPosition === "right" && iconElement}
    </MuiButton>
  );
};

export default CustomButton;
