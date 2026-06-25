import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import { useTheme } from "@mui/material/styles";

const BoxTruckSolutionsService = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main, // blueGrey[900]
        py: { xs: 8, md: 14 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* أيقونة الخلفية المائية الفخمة المعبرة عن التوصيل السريع وجدولة المواعيد */}
      <DepartureBoardIcon
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

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            // عمودي في الموبايل، وأفقي جنب بعض تماماً في الديسكتوب
            flexDirection: { xs: "column", md: "row" },
            // تمنع النزول لسطر جديد في الديسكتوب وتجبرهم يجوا جنب بعض
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
            width: "100%",
          }}
        >
          {/* 1. قسم النصوص والبيانات - متطابق النسبة ومحمي من الانكماش */}
          <Box
            sx={{
              width: { xs: "100%", md: "46%" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* عنوان الخدمة */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: theme.palette.text.primary,
                lineHeight: 1.15,
                mb: 4,
                fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                letterSpacing: "-1px",
              }}
            >
              Box Truck <br />
              Solutions
            </Typography>

            {/* الوصف التفصيلي المستخرج بدقة من صورة image_c6e7c1.png */}
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
              STS provides{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
              >
                flexible box truck services
              </Box>{" "}
              for short-haul, final-mile, and regional distribution. Ideal for{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
              >
                LTL, retail, and eCommerce deliveries,
              </Box>{" "}
              our fleet ensures quick response times, secure handling, and
              reliable performance across every route.
            </Typography>

            {/* البوردر الجانبي المدمج بلونين المتناسق مع بقية الأقسام المعتمدة في الهوية */}
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
                Fast. Efficient. Always dependable.
              </Typography>
            </Box>
          </Box>

          {/* 2. قسم الصورة العائمة مع التوهج والأقواس المنضبطة تماماً */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              flexShrink: 0,
              // تأثير التوهج البرتقالي الخلفي الناعم عند الـ Hover
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
              }}
            >
              <Box
                component="img"
                src="https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?auto=format&fit=crop&q=80&w=1200&fm=webp"
                alt="Box Truck Solutions Final Mile Delivery Fleet and Logistics"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BoxTruckSolutionsService;
