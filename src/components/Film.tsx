import { Box, Container } from "@mui/material";
import VideoSection from "./ui/Video";
import Image from "next/image";
import CustomButton from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import GridPattern from "./ui/GridPattern";

const Film = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: {
          xs: 7,
          md: 10,
        },
        overflow: "hidden",
      }}
    >
      <GridPattern
        horizontalAlign="start"
        verticalAlign="start"
        opacity={0.7}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 0.9fr",
            },
            alignItems: "center",

            gap: {
              xs: 5,
              md: 8,
            },
            zIndex: 3,
          }}
        >
          {/* TEXT */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <SectionHeading
              icon="/icons/icon-video.svg"
              title="تور ویدیویی اقامتگاه گیلمار"
              description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید."
              maxWidth={700}
              align="left"
            />
            <Box sx={{ mt: 2 }}>
              <CustomButton
                title="اقامت در گیلمار"
                iconBackground
                icon={
                  <Image
                    src={"/icons/arrow.svg"}
                    alt="icon-arrow"
                    width={17}
                    height={13}
                  />
                }
                href="#film"
                iconPosition="right"
              />
            </Box>
          </Box>
          <VideoSection />
          <Image
            src="/images/removal.png"
            alt="removal"
            width={134}
            height={139}
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: "45%",
              zIndex: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Film;
