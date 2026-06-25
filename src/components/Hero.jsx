import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "70vh", md: "85vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('/images/hero.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "700px" },
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: { xs: "32px", sm: "42px", md: "56px" },
                letterSpacing: "0.5px",
                lineHeight: 1.2,
              }}
            >
              Smart Transportation.
              <Box component="span" sx={{ display: "block" }}>
                Real-World Execution.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: "600px",
              }}
            >
              Nationwide trucking, drayage, intermodal, and
              temperature-controlled capacity built for reliability, speed, and
              cost control.
            </Typography>

            <Box sx={{ mt: 1.5 }}>
              <CustomButton component={Link} to="/drive-for-us">
                Drive For Us!
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: { xs: 8, md: 10 },
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          textAlign: "center",
          mt: "-1px",
          outline: `1px solid ${theme.palette.primary.main}`,
          outlineOffset: "-1px",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box
              sx={{
                display: "inline-block",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 900,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  letterSpacing: "-1px",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Our Mission
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

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "17px", md: "21px" },
                lineHeight: 1.8,
                fontWeight: 500,
                px: { xs: 2, md: 4 },
                mt: 2,
              }}
            >
              To operate a{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
              >
                trusted
              </Box>
              ,{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
              >
                asset-based trucking network
              </Box>{" "}
              that delivers consistency, accountability, and value.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "17px", md: "21px" },
                lineHeight: 1.8,
                fontWeight: 500,
                px: { xs: 2, md: 4 },
              }}
            >
              Every mile we drive reflects our commitment to safety,
              performance, and customer trust.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
