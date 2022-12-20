import { Box, Card, CardContent, Link, Typography } from "@mui/material";

const ProductRoadmap = () => {
  return (
    <Box
      sx={{
        zIndex: "1",
        height: "200px",
        mx: { md: "0", sm: "0", xs: "24px" },
      }}
    >
      <Card
        sx={{
          maxWidth: 350,
          minWidth: 200,
          height: "100%",
          position: "relative",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography
              sx={{ color: "#3A4374", fontWeight: "600", fontSize: "18px" }}
            >
              Roadmap
            </Typography>
            <Link href="/" sx={{ fontSize: "13px", fontWeight: "600" }}>
              View
            </Link>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  bgcolor: "#F49F85",
                }}
              />
              <Typography sx={{ color: "#647196" }}>Planned</Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", color: "#647196" }}>
              2
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  bgcolor: "#AD1FEA",
                }}
              />
              <Typography sx={{ color: "#647196" }}>In-Progress</Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", color: "#647196" }}>
              3
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "100%",
                  bgcolor: "#62BCFA",
                }}
              />
              <Typography sx={{ color: "#647196" }}>Live</Typography>
            </Box>
            <Typography sx={{ fontWeight: "700", color: "#647196" }}>
              1
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductRoadmap;
