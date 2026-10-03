import Cabins from "@/components/Cabins";
import Faq from "@/components/FaQ";
import Features from "@/components/Features";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import Package from "@/components/Package";
import Story from "@/components/Story";
import Testimonial from "@/components/Testimonial";
import Trips from "@/components/Trips";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
      }}
    >
      <Header />
      <Hero />
      <Story />
      <Features />
      <Trips />
      <Cabins />
      <Film />
      <Testimonial />
      <Package />
      <Journal />
      <Faq />
      <Footer />
    </Box>
  );
}
