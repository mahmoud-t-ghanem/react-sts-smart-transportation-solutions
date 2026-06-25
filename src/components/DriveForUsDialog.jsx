import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import CustomButton from "./CustomButton";
import { useCustomContext } from "../contexts/CustomContext";

const DriveForUsDialog = () => {
  const { openDriveDialog, setOpenDriveDialog } = useCustomContext();

  const handleClose = () => {
    setOpenDriveDialog(false);
  };
  const theme = useTheme();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cdlNum: "",
    experience: "",
    phone: "",
    email: "",
    about: "",
    endorsements: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    cdlNum: false,
    experience: false,
    phone: false,
    email: false,
  });

  const [helperTexts, setHelperTexts] = useState({
    firstName: "",
    lastName: "",
    cdlNum: "",
    experience: "",
    phone: "",
    email: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[\u0600-\u06FFa-zA-Z\s]{2,}$/;
    return regex.test(name.trim());
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9+\s-]{7,15}$/;
    return regex.test(phone.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "firstName" || name === "lastName") {
      const fieldLabel = name === "firstName" ? "First name" : "Last name";
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, [name]: true }));
        setHelperTexts((prev) => ({
          ...prev,
          [name]: `${fieldLabel} is required`,
        }));
      } else if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, [name]: true }));
        setHelperTexts((prev) => ({
          ...prev,
          [name]: "Invalid name (at least 2 characters, letters only)",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: false }));
        setHelperTexts((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "cdlNum") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, cdlNum: true }));
        setHelperTexts((prev) => ({ ...prev, cdlNum: "CDL# is required" }));
      } else {
        setErrors((prev) => ({ ...prev, cdlNum: false }));
        setHelperTexts((prev) => ({ ...prev, cdlNum: "" }));
      }
    }

    if (name === "experience") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, experience: true }));
        setHelperTexts((prev) => ({
          ...prev,
          experience: "Experience is required",
        }));
      } else {
        setErrors((prev) => ({ ...prev, experience: false }));
        setHelperTexts((prev) => ({ ...prev, experience: "" }));
      }
    }

    if (name === "phone") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, phone: true }));
        setHelperTexts((prev) => ({
          ...prev,
          phone: "Phone number is required",
        }));
      } else if (!validatePhone(value)) {
        setErrors((prev) => ({ ...prev, phone: true }));
        setHelperTexts((prev) => ({
          ...prev,
          phone: "Please enter a valid phone number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: false }));
        setHelperTexts((prev) => ({ ...prev, phone: "" }));
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, email: true }));
        setHelperTexts((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: true }));
        setHelperTexts((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: false }));
        setHelperTexts((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFirstNameValid = validateName(form.firstName);
    const isLastNameValid = validateName(form.lastName);
    const isCdlValid = form.cdlNum.trim() !== "";
    const isExpValid = form.experience.trim() !== "";
    const isPhoneValid = validatePhone(form.phone);
    const isEmailValid = validateEmail(form.email);

    setErrors({
      firstName: !isFirstNameValid,
      lastName: !isLastNameValid,
      cdlNum: !isCdlValid,
      experience: !isExpValid,
      phone: !isPhoneValid,
      email: !isEmailValid,
    });

    setHelperTexts({
      firstName: isFirstNameValid
        ? ""
        : form.firstName.trim() === ""
          ? "First name is required"
          : "Invalid name",
      lastName: isLastNameValid
        ? ""
        : form.lastName.trim() === ""
          ? "Last name is required"
          : "Invalid name",
      cdlNum: isCdlValid ? "" : "CDL# is required",
      experience: isExpValid ? "" : "Years of CDL Experience is required",
      phone: isPhoneValid
        ? ""
        : form.phone.trim() === ""
          ? "Phone number is required"
          : "Invalid phone number",
      email: isEmailValid
        ? ""
        : form.email.trim() === ""
          ? "Email is required"
          : "Please enter a valid email",
    });

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isCdlValid ||
      !isExpValid ||
      !isPhoneValid ||
      !isEmailValid
    ) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
      setForm({
        firstName: "",
        lastName: "",
        cdlNum: "",
        experience: "",
        phone: "",
        email: "",
        about: "",
        endorsements: "",
      });
      setErrors({
        firstName: false,
        lastName: false,
        cdlNum: false,
        experience: false,
        phone: false,
        email: false,
      });
      setHelperTexts({
        firstName: "",
        lastName: "",
        cdlNum: "",
        experience: "",
        phone: "",
        email: "",
      });

      setTimeout(() => {
        handleClose();
      }, 50);
    }, 1500);
  };

  const textFieldStyles = {
    mb: 2.5,
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      color: theme.palette.text.primary,
      borderRadius: "12px",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
      "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
      "&.Mui-focused fieldset": { borderColor: theme.palette.secondary.main },
      "&.Mui-error fieldset": { borderColor: "#ff1744 !important" },
      "&.Mui-error:hover fieldset": { borderColor: "#ff1744 !important" },
      "&.Mui-error.Mui-focused fieldset": { borderColor: "#ff1744 !important" },
    },
    "& input, & textarea": {
      color: `${theme.palette.text.primary} !important`,
      "&:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset !important`,
        WebkitTextFillColor: `${theme.palette.text.primary} !important`,
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
      "&.Mui-focused": { color: theme.palette.secondary.main },
      "&.Mui-error": { color: "#ff1744 !important" },
      "&.Mui-error.Mui-focused": { color: "#ff1744 !important" },
    },
    "& .MuiFormHelperText-root": {
      color: "#ff1744 !important",
      fontSize: "0.78rem",
      fontWeight: 500,
      mt: 0.5,
      ml: 0.5,
    },
  };

  return (
    <>
      <Dialog
        open={openDriveDialog}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        disableScrollLock={true}
        disableEnforceFocus={true}
        disableRestoreFocus={true}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(3px)",
            },
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: `${theme.palette.primary.main} !important`,
            backgroundImage: "none !important",
            color: theme.palette.text.primary,
            p: { xs: 2, sm: 3 },
            borderRadius: { xs: "20px !important", sm: "24px !important" },
            boxShadow: "0px 25px 60px rgba(0, 0, 0, 0.55) !important",
            border: `1px solid rgba(255, 87, 34, 0.15)`,
            maxWidth: "500px",
            maxHeight: { xs: "calc(100% - 32px)", sm: "calc(100% - 64px)" }, // يمنع اختفاء الـ Dialogactions في الأسفل
            width: { xs: "calc(100% - 24px)", sm: "100%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          disabled={loading}
          sx={{
            position: "absolute",
            right: { xs: 16, sm: 20 },
            top: { xs: 16, sm: 20 },
            zIndex: 10,
            color: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.secondary.main,
              backgroundColor: "rgba(255, 87, 34, 0.05)",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: { xs: "1.45rem", sm: "1.85rem" },
            letterSpacing: "0.5px",
            pt: { xs: 2, sm: 2.5 },
            pb: 1,
            color: theme.palette.secondary.main,
            flexShrink: 0,
          }}
        >
          Drive For Us
        </DialogTitle>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <DialogContent
            sx={{
              pt: 2,
              pb: 1,
              flexGrow: 1,
              overflowY: "auto",
              pr: 1.5,
              "&::-webkit-scrollbar": { width: "4px" },
              "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                "&:hover": { backgroundColor: theme.palette.secondary.main },
              },
            }}
          >
            <TextField
              label="First Name*"
              name="firstName"
              fullWidth
              variant="outlined"
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
              helperText={helperTexts.firstName}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Last Name*"
              name="lastName"
              fullWidth
              variant="outlined"
              value={form.lastName}
              onChange={handleChange}
              error={errors.lastName}
              helperText={helperTexts.lastName}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="CDL#*"
              name="cdlNum"
              fullWidth
              variant="outlined"
              value={form.cdlNum}
              onChange={handleChange}
              error={errors.cdlNum}
              helperText={helperTexts.cdlNum}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Years of CDL Experience*"
              name="experience"
              fullWidth
              variant="outlined"
              value={form.experience}
              onChange={handleChange}
              error={errors.experience}
              helperText={helperTexts.experience}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Phone Number*"
              name="phone"
              fullWidth
              variant="outlined"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              helperText={helperTexts.phone}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Email*"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              helperText={helperTexts.email}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Tell us about you"
              name="about"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={form.about}
              onChange={handleChange}
              disabled={loading}
              sx={textFieldStyles}
            />

            <TextField
              label="Any Endorsements? Intermodal/Drayage Experience?"
              name="endorsements"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={form.endorsements}
              onChange={handleChange}
              disabled={loading}
              sx={textFieldStyles}
            />
          </DialogContent>

          <DialogActions
            sx={{
              px: 3,
              pb: { xs: 2, sm: 2.5 },
              pt: 1.5,
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CustomButton type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress size={24} sx={{ color: "inherit" }} />
              ) : (
                "Send"
              )}
            </CustomButton>
          </DialogActions>
        </Box>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
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
          Thank you! Your application has been submitted successfully. We'll
          contact you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

export default DriveForUsDialog;
