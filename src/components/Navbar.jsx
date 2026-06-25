import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import HubIcon from "@mui/icons-material/Hub";

import { useTheme } from "@mui/material/styles";
import CustomButton from "./CustomButton";

const services = [
  {
    id: "drayage-intermodal",
    title: "Drayage & Intermodal",
    desc: "Port & rail logistics",
    icon: <HubIcon sx={{ color: "#38b000" }} />,
  },
  {
    id: "amazon-linehaul",
    title: "Amazon Linehaul",
    desc: "Dedicated network shipping",
    icon: <LocalMallIcon sx={{ color: "#ff9900" }} />,
  },
  {
    id: "otr-dry-van",
    title: "OTR & Regional Dry Van",
    desc: "Nationwide long-haul",
    icon: <LocalShippingIcon sx={{ color: "#0077b6" }} />,
  },
  {
    id: "reefer-solutions",
    title: "53' Reefers",
    desc: "Temperature-controlled",
    icon: <AcUnitIcon sx={{ color: "#00b4d8" }} />,
  },
  {
    id: "box-trucks",
    title: "Box Trucks",
    desc: "Local & flexible delivery",
    icon: <AirportShuttleIcon sx={{ color: "#e63946" }} />,
  },
];

const Navbar = () => {
  const theme = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleMobileLinkClick}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ justifyContent: "space-between", py: 2.5, minHeight: "80px" }}
          >
            <Box
              component={Link}
              to="/home"
              onClick={handleMobileLinkClick}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <LocalShippingIcon
                sx={{
                  fontSize: { xs: 35, md: 40 },
                  color: "secondary.main",
                  mr: 1.5,
                }}
              />
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: theme.palette.text.primary,
                    lineHeight: 1,
                    fontSize: { xs: "22px", md: "28px" },
                  }}
                >
                  STS
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  SMART TRANSPORTATION SOLUTIONS
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
                position: "relative",
              }}
            >
              <Button
                component={Link}
                to="/home"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  position: "relative",
                  transition: "color 0.4s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "2px",
                    bottom: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    backgroundColor: "secondary.main",
                    transition: "width 0.4s ease",
                  },
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "transparent",
                    "&::after": { width: "80%" },
                  },
                }}
              >
                Home
              </Button>

              <Button
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{
                  color: menuOpen
                    ? "secondary.main"
                    : theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  position: "relative",
                  transition: "color 0.4s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "2px",
                    bottom: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: menuOpen ? "80%" : "0%",
                    backgroundColor: "secondary.main",
                    transition: "width 0.4s ease",
                  },
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "transparent",
                    "&::after": { width: "80%" },
                  },
                }}
              >
                Services
              </Button>

              {menuOpen && (
                <Box
                  onMouseLeave={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    mt: 2,
                    p: 2,
                    backgroundColor: theme.palette.primary.main,
                    minWidth: "340px",
                    borderRadius: "12px",
                    border: "1px solid #2d3748",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                    zIndex: 1400,
                    animation: "fadeInUp 0.4s ease",
                    "@keyframes fadeInUp": {
                      "0%": {
                        opacity: 0,
                        transform: "translateX(-50%) translateY(10px)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateX(-50%) translateY(0)",
                      },
                    },
                  }}
                >
                  <Grid container spacing={1}>
                    {services.map((service, index) => (
                      <Box
                        component={Link}
                        to={`/${service.id}`}
                        key={index}
                        onClick={() => setMenuOpen(false)}
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                          p: 1.5,
                          display: "flex",
                          gap: 2,
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        {service.icon}
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: "14px",
                              color: theme.palette.text.primary,
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {service.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <CustomButton component={Link} to="/drive-for-us">
                Drive For Us!
              </CustomButton>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{
                  color: theme.palette.text.primary,
                  transform: mobileMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {mobileMenuOpen ? (
                  <CloseIcon sx={{ fontSize: 30, color: "secondary.main" }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 30 }} />
                )}
              </IconButton>
            </Box>
          </Toolbar>

          <Collapse in={mobileMenuOpen} timeout="auto">
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                pb: 3,
                px: 1,
                gap: 0.5,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
              }}
            >
              <Button
                component={Link}
                to="/home"
                onClick={handleMobileLinkClick}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  justifyContent: "center",
                  width: "100%",
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 0,
                  position: "relative",
                  transition: "color 0.4s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "2px",
                    bottom: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    backgroundColor: "secondary.main",
                    transition: "width 0.4s ease",
                  },
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    "&::after": { width: "100%" },
                  },
                }}
              >
                Home
              </Button>

              <Button
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: mobileServicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                sx={{
                  color: mobileServicesOpen
                    ? "secondary.main"
                    : theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  justifyContent: "center",
                  width: "100%",
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 0,
                  position: "relative",
                  transition: "color 0.4s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "2px",
                    bottom: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: mobileServicesOpen ? "100%" : "0%",
                    backgroundColor: "secondary.main",
                    transition: "width 0.4s ease",
                  },
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    "&::after": { width: "100%" },
                  },
                }}
              >
                Services
              </Button>

              <Collapse
                in={mobileServicesOpen}
                timeout="auto"
                unmountOnExit
                sx={{ width: "100%" }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "12px",
                    p: 2,
                    my: 1,
                    width: "100%",
                    border: "1px solid #2d3748",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  <Grid container spacing={1}>
                    {services.map((service, index) => (
                      <Box
                        component={Link}
                        to={`/${service.id}`}
                        key={index}
                        onClick={handleMobileLinkClick}
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                          p: 1.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          cursor: "pointer",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.05)",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        {service.icon}
                        <Box sx={{ textAlign: "left" }}>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: "14px",
                              color: theme.palette.text.primary,
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {service.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              </Collapse>

              <Box sx={{ width: "100%", pt: 1.5, px: 1 }}>
                <CustomButton
                  sx={{ width: "100%" }}
                  component={Link}
                  to="/drive-for-us"
                  onClick={handleMobileLinkClick}
                >
                  Drive For Us!
                </CustomButton>
              </Box>
            </Box>
          </Collapse>
        </Container>
      </AppBar>
    </ClickAwayListener>
  );
};

export default Navbar;
