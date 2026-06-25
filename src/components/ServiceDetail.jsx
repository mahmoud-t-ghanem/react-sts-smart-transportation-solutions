import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { detailedServicesData } from "../data/detailedServicesData";
import { blueGrey } from "@mui/material/colors";

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
      {/* --- القسم العلوي الرئيسي للخدمة --- */}
      <Box
        sx={{
          width: "100%",
          pt: { xs: 12, md: 18 },
          pb: { xs: 4, md: 6 },
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
          {/* تم استخدام container وتمرير alignItems داخل الـ sx لمنع تحذيرات الـ DOM */}
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{ alignItems: "center" }}
          >
            {/* العمود الأيسر: النصوص والمميزات (يأخذ نصف الشاشة 6/12 في الشاشات الكبيرة md) */}
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

            {/* العمود الأيمن: كرت الصورة (بجانب النص تماماً في الشاشات الكبيرة md) */}
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

      {/* --- رندرة شرطية لسكشن Our Story في حال وجوده بالداتا --- */}
      {story && (
        <Box
          sx={{
            backgroundColor: blueGrey[800],
            width: "100%",
            pt: { xs: 4, md: 6 },
            pb: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                color: theme.palette.text.primary,
                mb: { xs: 5, md: 6 },
              }}
            >
              {story.title}
            </Typography>

            <Grid
              container
              spacing={{ xs: 6, md: 8 }}
              sx={{ justifyContent: "center" }}
            >
              {/* Core Capabilities */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={story.capabilitiesImage}
                  alt="Core Capabilities"
                  sx={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    mb: 3,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                    mb: 2.5,
                    textAlign: "center",
                  }}
                >
                  Core Capabilities
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
                  {story.capabilitiesList.map((capability, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.95rem",
                        "&::marker": { color: theme.palette.secondary.main },
                      }}
                    >
                      {capability}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Coverage */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={story.coverageImage}
                  alt="Coverage"
                  sx={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    mb: 3,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                    mb: 2.5,
                    textAlign: "center",
                  }}
                >
                  Coverage
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    px: { md: 2 },
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Primary:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {story.coverage.primary}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Extended:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {story.coverage.extended}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Facilities:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {story.coverage.facilities}
                    </Typography>
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
