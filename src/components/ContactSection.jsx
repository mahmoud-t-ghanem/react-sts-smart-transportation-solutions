import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import InteractiveMap from "./InteractiveMap";
import CustomButton from "./CustomButton";
import { blueGrey } from "@mui/material/colors";
import { useCustomContext } from "../contexts/CustomContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const ContactSection = () => {
  const { setOpenEstimateDialog } = useCustomContext();
  const theme = useTheme();
  const [openHours, setOpenHours] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                width: "max-content",
                margin: { xs: "0 auto 24px auto", md: "0 0 24px 0" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.text.primary,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Contact Us
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "secondary.main",
                  borderRadius: "2px",
                }}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.25rem", md: "1.4rem" },
              }}
            >
              Better yet, see us in person!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: "600px",
                mb: 5,
                fontSize: "1.05rem",
                mx: { xs: "auto", md: 0 },
              }}
            >
              We love our customers, so feel free to visit during normal
              business hours.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: 3,
                mb: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <BusinessIcon
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.6rem",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  }}
                >
                  STS SMART TRANSPORTATION SOLUTIONS INC.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "1.3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
                >
                  Markham, IL, USA
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
                  Hours
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

            <CustomButton onClick={() => setOpenEstimateDialog(true)}>
              GET AN ESTIMATE
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

        <Box
          sx={{
            width: "100%",
            backgroundColor: "transparent",
            pt: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              width: "max-content",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Stay Up to Date
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "4px",
                backgroundColor: "secondary.main",
                borderRadius: "2px",
              }}
            />
          </Box>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

              if (!email.trim()) {
                setError(true);
                setHelperText("Email address is required");
                return;
              }

              if (!emailRegex.test(email)) {
                setError(true);
                setHelperText("Please enter a valid email address");
                return;
              }

              setError(false);
              setHelperText("");
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
                setSnackbarOpen(true);
                setEmail("");
              }, 1200);
            }}
            noValidate
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "stretch",
              width: "100%",
              gap: 2,
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) {
                  setError(false);
                  setHelperText("");
                }
              }}
              fullWidth
              autoComplete="email"
              error={error}
              helperText={helperText}
              disabled={loading}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  color: theme.palette.text.primary,
                  borderRadius: "50px",
                  height: "56px",
                  px: 2,
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.15)" },
                  "&:hover fieldset": {
                    borderColor: error
                      ? theme.palette.error.main
                      : "rgba(255, 255, 255, 0.3)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: error
                      ? theme.palette.error.main
                      : theme.palette.secondary.main,
                  },
                  "&.Mui-error fieldset": {
                    borderColor: theme.palette.error.main,
                  },
                },
                "& input::placeholder": {
                  color: "rgba(255, 255, 255, 0.4)",
                  opacity: 1,
                  fontSize: "1rem",
                },
                "& input": {
                  fontSize: "1rem",
                  "&:-webkit-autofill": {
                    WebkitTextFillColor: `${theme.palette.text.primary} !important`,
                    transition: "background-color 5000s ease-in-out 0s",
                    borderRadius: "50px",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: theme.palette.error.main,
                  textAlign: "left",
                  px: 2,
                  mt: 0.5,
                  fontWeight: 500,
                },
              }}
            />

            <CustomButton
              type="submit"
              disabled={loading}
              sx={{
                whiteSpace: "nowrap",
                height: "56px",
                px: 4,
                borderRadius: "50px",
                minWidth: "130px",
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "inherit" }} />
              ) : (
                "Sign Up"
              )}
            </CustomButton>
          </Box>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity="success"
              variant="filled"
              sx={{
                width: "100%",
                borderRadius: "8px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Thank you! You have successfully subscribed to our newsletter.
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
