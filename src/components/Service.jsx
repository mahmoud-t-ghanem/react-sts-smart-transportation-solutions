import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { servicesData } from "../data/servicesData";
import { blueGrey } from "@mui/material/colors";

const Service = ({ id }) => {
  const theme = useTheme();

  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <Box sx={{ py: 4, color: theme.palette.error.main, textAlign: "center" }}>
        Service with ID "{id}" not found.
      </Box>
    );
  }

  const IconComponent = service.icon;

  return (
    <Box
      sx={{
        backgroundColor: blueGrey[800],
        py: { xs: 8, md: 14 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mt: "-1px",
        outline: `1px solid ${blueGrey[800]}`,
        outlineOffset: "-1px",
      }}
    >
      {IconComponent && (
        <IconComponent
          sx={{
            position: "absolute",
            bottom: "-20px",
            left: "-50px",
            fontSize: "400px",
            color: "rgba(255, 255, 255, 0.015)",
            pointerEvents: "none",
            transform: "rotate(-15deg)",
          }}
        />
      )}

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "46%" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 4,
              }}
            >
              {service.isReefer && (
                <AcUnitIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "2.5rem",
                  }}
                />
              )}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.text.primary,
                  lineHeight: 1.15,
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                  letterSpacing: "-1px",
                }}
              >
                {service.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "1.08rem",
                lineHeight: 1.8,
                mb: 5,
                textAlign: "justify",
              }}
            >
              {service.description}
            </Typography>

            <Box
              sx={{
                borderLeft: `4px solid ${theme.palette.secondary.main}`,
                pl: 2.5,
                py: 0.5,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-4px",
                  top: 0,
                  width: "4px",
                  height: "35%",
                  backgroundColor: theme.palette.text.primary,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  lineHeight: 1.6,
                  letterSpacing: "0.5px",
                }}
              >
                {service.quote}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
                opacity: 0,
                zIndex: 1,
                transition: "opacity 0.5s ease",
                filter: "blur(40px)",
              },
              "&:hover": {
                "&::after": {
                  opacity: 0.22,
                },
                "& img": {
                  transform: "scale(1.03)",
                },
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: { xs: "320px", sm: "450px", md: "500px" },
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.55)",
                transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                isolation: "isolate",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                  borderRadius: "20px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
