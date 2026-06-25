import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,

        pt: { xs: 6, md: 8 },
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.02)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 5, md: 12 },
            pb: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "460px",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <LocalShippingIcon
                sx={{ color: theme.palette.secondary.main, fontSize: "2rem" }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.text.primary,
                  letterSpacing: "1px",
                }}
              >
                STS
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.8,
              }}
            >
              Smart Transportation Solutions Inc. Delivering reliability,
              safety, and cutting-edge logistics management across Markham and
              beyond.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: "460px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Contact Info
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.1rem",
                    mt: 0.3,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.4 }}
                >
                  Markham, IL, USA
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.1rem",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  info@ststrucking.us
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.3)",
              fontSize: "0.8rem",
              textAlign: "center",
              display: "block",
            }}
          >
            Copyright © {new Date().getFullYear()} STS - All Rights Reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.15)",
              fontSize: "0.75rem",
              textAlign: "center",
            }}
          >
            Designed with Precision
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
