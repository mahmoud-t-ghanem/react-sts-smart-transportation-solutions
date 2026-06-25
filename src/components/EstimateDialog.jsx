import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";
import CustomButton from "./CustomButton";
import { useCustomContext } from "../contexts/CustomContext";

const EstimateDialog = () => {
  const { operEstimateDialog, setOpenEstimateDialog } = useCustomContext();

  const handleClose = () => {
    setOpenEstimateDialog(false);
  };
  const theme = useTheme();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [helperTexts, setHelperTexts] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[\u0600-\u06FFa-zA-Z\s]{2,}$/;
    return regex.test(name.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "name") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, name: true }));
        setHelperTexts((prev) => ({ ...prev, name: "Name is required" }));
      } else if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, name: true }));
        setHelperTexts((prev) => ({
          ...prev,
          name: "Please enter a valid name (at least 2 characters, letters only)",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: false }));
        setHelperTexts((prev) => ({ ...prev, name: "" }));
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

    if (name === "message") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, message: true }));
        setHelperTexts((prev) => ({
          ...prev,
          message: "Please describe what services you need",
        }));
      } else if (value.trim().length < 10) {
        setErrors((prev) => ({ ...prev, message: true }));
        setHelperTexts((prev) => ({
          ...prev,
          message: "Message should be at least 10 characters long",
        }));
      } else {
        setErrors((prev) => ({ ...prev, message: false }));
        setHelperTexts((prev) => ({ ...prev, message: "" }));
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(form.name);
    const isEmailValid = validateEmail(form.email);
    const isMessageValid = form.message.trim().length >= 10;

    setErrors({
      name: !isNameValid,
      email: !isEmailValid,
      message: !isMessageValid,
    });

    setHelperTexts({
      name: isNameValid
        ? ""
        : form.name.trim() === ""
          ? "Name is required"
          : "Please enter a valid name (at least 2 characters, letters only)",
      email: isEmailValid
        ? ""
        : form.email.trim() === ""
          ? "Email is required"
          : "Please enter a valid email address",
      message: isMessageValid
        ? ""
        : form.message.trim() === ""
          ? "Please describe what services you need"
          : "Message should be at least 10 characters long",
    });

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSnackbarOpen(true);
      setForm({ name: "", email: "", message: "" });
      setFiles([]);
      setErrors({ name: false, email: false, message: false });
      setHelperTexts({ name: "", email: "", message: "" });
      handleClose();
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
        open={operEstimateDialog}
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
            maxWidth: "460px",
            width: { xs: "calc(100% - 24px)", sm: "100%" },
            mx: "auto",
            overflow: "hidden",
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
          }}
        >
          Get an Estimate
        </DialogTitle>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ overflow: "hidden" }}
        >
          <DialogContent
            sx={{
              pt: 2,
              pb: 1,
              maxHeight: { xs: "55vh", sm: "65vh" },
              overflowY: "auto",
              pr: 1.5,
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              },
            }}
          >
            <TextField
              label="Name*"
              name="name"
              fullWidth
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              helperText={helperTexts.name}
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
              label="What services can we help you with?*"
              name="message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              helperText={helperTexts.message}
              disabled={loading}
              sx={textFieldStyles}
            />

            <Box sx={{ mt: 0.5 }}>
              <Button
                component="label"
                variant="text"
                disabled={loading}
                startIcon={<AttachFileIcon />}
                sx={{
                  color: theme.palette.text.secondary,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  p: "4px 8px",
                  borderRadius: "8px",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    backgroundColor: "rgba(255, 87, 34, 0.05)",
                  },
                }}
              >
                Attach Files
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={handleFileChange}
                />
              </Button>

              {files.length > 0 && (
                <Box
                  sx={{
                    mt: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      pl: 0.5,
                    }}
                  >
                    Attachments ({files.length})
                  </Typography>
                  {files.map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(255, 255, 255, 0.01)",
                        p: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          wordBreak: "break-all",
                          fontSize: "0.8rem",
                        }}
                      >
                        {file.name}{" "}
                        <span
                          style={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.7rem",
                            marginLeft: "6px",
                          }}
                        >
                          ({file.size ? (file.size / 1024).toFixed(1) : "0.0"}{" "}
                          KB)
                        </span>
                      </Typography>
                      <IconButton
                        size="small"
                        disabled={loading}
                        onClick={() => handleRemoveFile(index)}
                        sx={{
                          color: "rgba(255, 255, 255, 0.2)",
                          "&:hover": {
                            color: "#ff1744",
                            backgroundColor: "rgba(255, 23, 68, 0.05)",
                          },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </DialogContent>

          <DialogActions
            sx={{
              px: 3,
              pb: { xs: 2.5, sm: 3.5 },
              pt: 1.5,
              justifyContent: "center",
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
          Thank you! Your estimate request has been submitted successfully.
          We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </>
  );
};

export default EstimateDialog;
