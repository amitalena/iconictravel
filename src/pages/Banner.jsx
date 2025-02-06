import { Box, Typography } from "@mui/material";
import backgroundVideo from "../assets/videos/banner.mp4"; // Adjust the path as needed

const Banner = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    zIndex: 1,
                    width: "90%", // Ensures text is responsive
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    Welcome to Our Website
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Explore the world with us!
                </Typography>
            </Box>
        </Box>
    );
};

export default Banner;
