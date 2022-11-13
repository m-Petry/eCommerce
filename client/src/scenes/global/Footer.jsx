import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const {
        palette: { neutral },
    } = useTheme();
    return <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="30px"
            columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                >ECOMMER</Typography>
                <div>
                    Ecommer is one of the biggest international fashion companies, and it belongs to Indiehex, one of the world’s largest distribution groups.
                </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">Careers</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Our Stores</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Terms & Conditions</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">Help Center</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Track Your Order</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Corporate & Bulk Purchasing</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">Returns & Refunds</Typography>
            </Box>
            <Box width="clamp(20%, 25%, 30%)">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                >Contact Us</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px"> 13th Street. 47 W 13th St, New York, NY</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">E-mail: contact@ecommer.com</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px">(51)99408-5461</Typography>

            </Box>
        </Box>
    </Box>;
};

export default Footer;