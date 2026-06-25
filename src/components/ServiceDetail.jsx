import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { detailedServicesData } from "../data/detailedServicesData";
import { blueGrey } from "@mui/material/colors";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const ServiceDetail = ({ id }) => {
  const theme = useTheme();

  const service = detailedServicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <Box sx={{ py: 4, color: theme.palette.error.main, textAlign: "center" }}>
        Service with ID "{id}" not found.
      </Box>
    );
  }

  const IconComponent = service.icon;
  const story = service.storyData;

  return (
    <Box sx={{ width: "100%", backgroundColor: blueGrey[800] }}>
      <Box
        sx={{
          width: "100%",
          pt: { xs: 7, md: 10 },
          pb: { xs: 7, md: 10 },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
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
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{ alignItems: "center" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
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
                    fontSize: { xs: "2.3rem", sm: "3rem", md: "3.5rem" },
                  }}
                >
                  {service.title}
                </Typography>
              </Box>

              {service.subtitle && (
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {service.subtitle}
                </Typography>
              )}

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                {service.description}
              </Typography>

              {service.features && service.features.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 800,
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Our competitive edge
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      p: 0,
                      m: 0,
                      pl: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    {service.features.map((singleFeature, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.98rem",
                          "&::marker": { color: theme.palette.secondary.main },
                        }}
                      >
                        {singleFeature}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {service.quote && (
                <Box
                  sx={{
                    borderLeft: `4px solid ${theme.palette.secondary.main}`,
                    pl: 2.5,
                    py: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                    }}
                  >
                    {service.quote}
                  </Typography>
                </Box>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "480px" },
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.55)",
                  "&:hover": { "& img": { transform: "scale(1.03)" } },
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
                    transition: "transform 0.6s ease",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {story && (
        <Box
          component="section"
          sx={{
            backgroundColor: blueGrey[800],
            width: "100%",
            pt: { xs: 8, md: 12 },
            pb: { xs: 10, md: 14 },
            borderTop: "1px solid rgba(255, 255, 255, 0.02)",
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                color: theme.palette.text.primary,
                mb: { xs: 6, md: 10 },
                letterSpacing: "0.5px",
              }}
            >
              {story.title}
            </Typography>

            <Grid
              container
              spacing={{ xs: 6, md: 10 }}
              sx={{ justifyContent: "center" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      width: "100%",
                      maxWidth: "550px",
                      height: { xs: "240px", sm: "300px" },
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.55)",
                      mb: 6,
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      "&:hover": { "& img": { transform: "scale(1.03)" } },
                    }}
                  >
                    <Box
                      component="img"
                      src={story.capabilitiesImage}
                      alt="Core Capabilities"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 800,
                      mb: 3,
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Core Capabilities
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      p: 0,
                      m: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      width: "100%",
                      maxWidth: "480px",
                    }}
                  >
                    {story.capabilitiesList.map((capability, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          listStyle: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          color: theme.palette.text.secondary,
                          fontSize: "0.95rem",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircleOutlinedIcon
                          sx={{
                            color: theme.palette.secondary.main,
                            fontSize: "1.2rem",
                            flexShrink: 0,
                          }}
                        />
                        {capability}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      width: "100%",
                      maxWidth: "550px",
                      height: { xs: "240px", sm: "300px" },
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.55)",
                      mb: 6,
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      "&:hover": { "& img": { transform: "scale(1.03)" } },
                    }}
                  >
                    <Box
                      component="img"
                      src={story.coverageImage}
                      alt="Coverage"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 800,
                      mb: 3,
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Coverage
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2.5,
                      width: "100%",
                      maxWidth: "480px",
                    }}
                  >
                    {[
                      { label: "Primary", value: story.coverage.primary },
                      { label: "Extended", value: story.coverage.extended },
                      { label: "Facilities", value: story.coverage.facilities },
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.02)",
                          p: 2,
                          borderRadius: "8px",
                          borderLeft: `3px solid ${theme.palette.secondary.main}`,
                          transition: "background-color 0.2s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.secondary.main,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            fontSize: "0.75rem",
                            mb: 0.5,
                            letterSpacing: "0.5px",
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ServiceDetail;
