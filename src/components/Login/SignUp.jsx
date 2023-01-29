import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs" sx={{ bgcolor: "#EDEDF1", height: "80vh" }}>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
        </Grid>
        <Stack sx={{ marginTop: "30%" }} spacing={2}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SignUp;
