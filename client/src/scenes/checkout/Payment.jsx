import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    return (
        <Box m="30px">
            {/* Contact Info */}
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="18px">
                    Contact Info
                </Typography>
                <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4", marginBottom: "15px" }}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="phoneNumber"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                />
            </Box>
        </Box>
    );
};

export default Payment;