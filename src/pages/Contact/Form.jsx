import {
  Box,
  FormControl,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
        Let's talk to us
      </Typography>
      <Box>
        <FormControl>
        <Grid rowSpacing={3}>
          <Grid item xs={12} container columnSpacing={4} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <Select fullWidth size="small">
              <MenuItem value="">
                <em>Contain Subject</em>
              </MenuItem>
              <MenuItem value={1}>Subject 1</MenuItem>
              <MenuItem value={2}>Subject 2</MenuItem>
              <MenuItem value={3}>Subject 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <TextareaAutosize
              minRows={12}
              placeholder="Enter your text here"
              style={{ width: "100%" }}
            />
          </Grid>
          <Button variant="contained" sx={{ bgcolor: "gray" }}>
            SUBMIT IT NOW
          </Button>
        </Grid>
      </FormControl>
      </Box>
    </Box>
  );
};

export default Form;
