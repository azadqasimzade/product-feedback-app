import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import bgImage from "../../../assets/suggestions/desktop/background-header.png";
import burgerIcon from "../../../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../../assets/shared/mobile/icon-close.svg";

interface FeedbackBoardProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedbackBoard = (props: FeedbackBoardProps) => {
  return (
    <Box
      sx={{
        height: { md: "137px", sm: "178px", xs: "72px" },
        zIndex: "99",
        mr: { md: 0, sm: 2, xs: 0 },
      }}
    >
      <Card
        sx={{
          maxWidth: { md: "350px" },
          minWidth: 150,
          height: "100%",
          position: "relative",
          borderRadius: { md: 3, sm: 3, xs: 0 },
          zIndex: "99",
        }}
      >
        <CardMedia component="img" alt="img" height="100%" image={bgImage} />
        <CardContent
          sx={{
            position: "absolute",
            zIndex: "99",
            top: { md: "20%", sm: "40%", xs: "8%" },
            left: 0,
            p: { md: "24px", sm: "10px", xs: "8px" },
            px: { xs: "24px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              color={"white"}
              sx={{
                mb: 0,
                fontWeight: 600,
                fontSize: { md: "20px", sm: "20px", xs: "15px" },
              }}
              component="div"
            >
              Frontend Mentor
            </Typography>
            <Typography
              gutterBottom
              color={"white"}
              sx={{
                opacity: "80%",
                fontSize: { md: "16px", sm: "16px", xs: "13px" },
              }}
              component="div"
            >
              Feedback Board
            </Typography>
          </Box>
          {props.open ? (
            <Box
              sx={{
                cursor: "pointer",
                display: { md: "none", sm: "none", xs: "inline-block" },
              }}
            >
              <div onClick={() => props.setOpen(false)}>
                <img src={burgerIcon} alt="hamburger-icon" />
              </div>
            </Box>
          ) : (
            <Box sx={{ cursor: "pointer" }}>
              <div onClick={() => props.setOpen(true)}>
                <img src={closeIcon} alt="hamburger-icon" />
              </div>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FeedbackBoard;
