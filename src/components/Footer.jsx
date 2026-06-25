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
        pt: { xs: 6, md: 10 },
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
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
            gap: { xs: 6, md: 4 },
            pb: { xs: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "380px" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}
            >
              <LocalShippingIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "2.2rem",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.text.primary,
                  letterSpacing: "1.5px",
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
                fontSize: "0.9rem",
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
              maxWidth: { xs: "100%", md: "320px" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.9rem",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              Contact Info
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                width: "100%",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "translateX(4px)" },
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9rem" }}
                >
                  Markham, IL, USA
                </Typography>
              </Box>

              <Box
                component="a"
                href="mailto:info@ststrucking.us"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateX(4px)",
                    "& .email-text": { color: theme.palette.text.primary },
                  },
                }}
              >
                <EmailIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography
                  className="email-text"
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s ease",
                  }}
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
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
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
