import Hero from "../components/Hero";
import Service from "../components/Service";
import ContactSection from "../components/ContactSection";
import { Box, Typography, Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const Home = () => {
  return (
    <>
      <Hero />
      <Box
        sx={{
          backgroundColor: blueGrey[800],
          pt: { xs: 8, md: 12 },
          pb: { xs: 4, md: 6 },
          textAlign: "center",
          position: "relative",
          mt: "-1px",
          outline: `1px solid ${blueGrey[800]}`,
          outlineOffset: "-1px",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "inline-block", position: "relative" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: "text.primary",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                letterSpacing: "-1px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Our Services
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "4px",
                backgroundColor: "secondary.main",
                borderRadius: "2px",
                margin: "0 auto",
              }}
            />
          </Box>
        </Container>
      </Box>
      <Service id="drayage-intermodal" />
      <Service id="amazon-linehaul" />
      <Service id="otr-dry-van" />
      <Service id="reefer-solutions" />
      <Service id="box-trucks" />
      <ContactSection />
    </>
  );
};

export default Home;
