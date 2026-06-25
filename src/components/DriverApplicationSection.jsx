import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";
import InteractiveMap from "./InteractiveMap";
import CustomButton from "./CustomButton";
import { blueGrey } from "@mui/material/colors";
import { useCustomContext } from "../contexts/CustomContext";

const DriverApplicationSection = () => {
  const { setOpenDriveDialog } = useCustomContext();
  const theme = useTheme();
  const [openHours, setOpenHours] = useState(false);

  const workingHours = [
    { day: "Mon", time: "09:00 am – 05:00 pm" },
    { day: "Tue", time: "09:00 am – 05:00 pm" },
    { day: "Wed", time: "09:00 am – 05:00 pm" },
    { day: "Thu", time: "09:00 am – 05:00 pm" },
    { day: "Fri", time: "09:00 am – 05:00 pm" },
    { day: "Sat", time: "Closed" },
    { day: "Sun", time: "Closed" },
  ];

  const getCurrentDayStatus = () => {
    const currentDayIndex = new Date().getDay();
    if (currentDayIndex === 0 || currentDayIndex === 6) {
      return (
        <Box
          component="span"
          sx={{ color: theme.palette.secondary.main, fontWeight: 700 }}
        >
          Closed today
        </Box>
      );
    }
    return (
      <>
        Open today{" "}
        <Box
          component="span"
          sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
        >
          09:00 am – 05:00 pm
        </Box>
      </>
    );
  };

  return (
    <Box
      id="contact-us"
      sx={{
        backgroundColor: blueGrey[800],
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            gap: { xs: 6, md: 8 },
            width: "100%",
            mb: { xs: 6, md: 10 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", md: "2.8rem" },
                letterSpacing: "1px",
                mb: 3,
              }}
            >
              Drive for STS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                letterSpacing: "0.5px",
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                mb: 4,
              }}
            >
              STS SMART TRANSPORTATION SOLUTIONS INC.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: "600px",
                mb: 3,
                fontSize: "1.05rem",
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.6,
              }}
            >
              Ready to work with a team that actually has your back on and off
              the road?
              <br />
              STS Smart Transportation Solutions Inc. is always looking for
              safe, reliable{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
              >
                CDL drivers and owner-operators
              </Box>{" "}
              to join our fleet.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: "600px",
                mb: 5,
                fontSize: "1.05rem",
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.6,
              }}
            >
              Whether you're an experienced driver or looking for a better home,
              we'd love to hear from you.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.4rem" },
              }}
            >
              Better yet, see us in person!
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: 2.5,
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <LocationOnIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.4rem",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  2125 W 162nd St, Markham, IL, USA
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <PhoneIcon
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "1.3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  (708) 202-9240
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: 0.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Office Hours
                </Typography>

                <Box
                  onClick={() => setOpenHours(!openHours)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    userSelect: "none",
                    py: 0.5,
                    px: 1.5,
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "1.1rem",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {getCurrentDayStatus()}
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: "1.2rem",
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: openHours ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Box>

                <Collapse
                  in={openHours}
                  sx={{ mt: 1.5, width: "100%", minWidth: "240px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.2,
                      alignItems: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {workingHours.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          gap: 3,
                          width: "100%",
                          justifyContent: { xs: "center", md: "flex-start" },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 700,
                            width: "40px",
                            textAlign: "left",
                          }}
                        >
                          {item.day}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: item.time === "Closed" ? 400 : 600,
                            width: "150px",
                            textAlign: "left",
                            opacity: item.time === "Closed" ? 0.4 : 1,
                          }}
                        >
                          {item.time}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            </Box>

            <CustomButton
              sx={{ py: 1.5, px: 3, maxWidth: "100%" }}
              onClick={() => {
                setOpenDriveDialog(true);
              }}
            >
              APPLY / CONTACT US DROP US A LINE AND WE'LL FOLLOW UP ABOUT NEXT
              STEPS.
            </CustomButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              minWidth: { xs: "100%", md: "45%" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.55)",
                height: { xs: "350px", sm: "400px", md: "500px" },
              }}
            >
              <InteractiveMap />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DriverApplicationSection;
