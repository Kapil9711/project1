import { Typography, Button, Stack, Box } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

import { useState, useRef } from "react";

// ******************Styling section Started**************************
const bgClr = blueGrey[50];
const BoxWrapper = (props) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: "50px",
        width: "50px",
        border: `4px solid ${props.clrbr}`,
        p: 2,
        borderRadius: "100%",
        zIndex: 1,
        background: bgClr,
        transition: "border-color .2s ease",
        transitionDelay: ".1s",
      }}
    >
      {props.children}
    </Stack>
  );
};

// ******************Styling section Started**************************

// ******************component section Started**************************
const Slider = () => {
  const [width, setWidth] = useState(() => 0);

  return (
    <Stack
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh", background: bgClr, p: 2 }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "100%",
          maxWidth: "370px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "6px",
            width: "100%",
            background: blueGrey[700],
            position: "absolute",
            zIndex: "0",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: width + "%",
              background: blue[500],
              transition: "width .2s ease",
            }}
          ></Box>
        </Box>
        <BoxWrapper clrbr={blue[500]}>
          <Typography variant="h4" component={"p"}>
            1
          </Typography>
        </BoxWrapper>
        <BoxWrapper clrbr={width >= 33 ? blue[500] : blueGrey[700]}>
          <Typography variant="h4" component={"p"}>
            2
          </Typography>
        </BoxWrapper>
        <BoxWrapper clrbr={width >= 66 ? blue[500] : blueGrey[700]}>
          <Typography variant="h4" component={"p"}>
            3
          </Typography>
        </BoxWrapper>
        <BoxWrapper clrbr={width >= 95 ? blue[500] : blueGrey[700]}>
          <Typography variant="h4" component={"p"}>
            4
          </Typography>
        </BoxWrapper>
      </Stack>

      <Stack spacing={4} direction={"row"}>
        <Button
          onClick={() => setWidth((prev) => prev - 33)}
          disabled={width === 0 ? true : false}
          color="secondary"
          variant="contained"
        >
          Prev
        </Button>
        <Button
          onClick={() => setWidth((prev) => prev + 33)}
          disabled={width >= 95 ? true : false}
          variant="contained"
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

// ******************component section Ended**************************

export default Slider;
