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
import { Link } from "react-router-dom";

const Login = () => {
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
              Log In
            </Typography>
          </Grid>
        <Stack sx={{ marginTop: "30%" }} spacing={2}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained">Log In</Button>
        </Stack>
        <Grid container spacing={18}>
          <Grid item xs={6}>
            <Link to="/register">New User ?!</Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/register">Forgot Password</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
