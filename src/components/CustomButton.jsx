import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const CustomButton = ({ sx = {}, onClick, children, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      variant="contained"
      {...props}
      sx={{
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: "14px",
        textTransform: "uppercase",
        borderRadius: "50px",
        px: 4,
        py: 1.5,
        letterSpacing: "1px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          transform: "translateY(-2px)",
          boxShadow: "0px 6px 20px rgba(255, 87, 34, 0.4)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
