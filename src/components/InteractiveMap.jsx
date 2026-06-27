import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const redIcon = new L.Icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ZoomController = ({ zoomLevel }) => {
  const map = useMap();
  useEffect(() => {
    map.setZoom(zoomLevel);
  }, [zoomLevel, map]);
  return null;
};

const MapLoadListener = ({ onReady }) => {
  const map = useMap();
  useEffect(() => {
    if (map) {
      map.whenReady(() => {
        setTimeout(() => {
          onReady();
        }, 300);
      });
    }
  }, [map, onReady]);
  return null;
};

const InteractiveMap = () => {
  const theme = useTheme();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [zoom, setZoom] = useState(11);
  const position = [41.6111, -87.6903];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 18));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 3));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        "& .leaflet-container": {
          width: "100%",
          height: "100%",
          background: theme.palette.primary.main,
        },
        "& .leaflet-control-zoom": {
          display: "none !important",
        },
        "& .leaflet-popup-content-wrapper": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          padding: "4px",
          border: `1px solid rgba(255, 255, 255, 0.05)`,
        },
        "& .leaflet-popup-tip": {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      {!mapLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <CircularProgress
            sx={{ color: theme.palette.secondary.main }}
            size={45}
            thickness={4.5}
          />
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 600,
              letterSpacing: "1px",
              fontSize: "0.85rem",
            }}
          >
            LOADING FLEET MAP...
          </Typography>
        </Box>
      )}

      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker position={position} icon={redIcon}>
          <Popup>
            <Box sx={{ p: 0.5, textAlign: "center" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                STS SMART TRANSPORT
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary }}
              >
                Markham, IL, USA
              </Typography>
            </Box>
          </Popup>
        </Marker>
        <ZoomController zoomLevel={zoom} />
        <MapLoadListener onReady={() => setMapLoaded(true)} />
      </MapContainer>

      {mapLoaded && (
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            zIndex: 1050,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <IconButton
            onClick={handleZoomIn}
            sx={{
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.primary.main,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.primary,
                transform: "scale(1.05)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleZoomOut}
            sx={{
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.primary.main,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.primary,
                transform: "scale(1.05)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default InteractiveMap;
