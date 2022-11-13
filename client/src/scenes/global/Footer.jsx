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
                    variant="h2"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                >Zalya</Typography>
                <div>
                    Zalya is one of the biggest international fashion companies, and it belongs to Indiehex, one of the world’s largest distribution groups.
                </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Careers</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Our Stores</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Terms & Conditions</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Help Center</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Track Your Order</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Corporate & Bulk Purchasing</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>Returns & Refunds</Typography>
            </Box>
            <Box width="clamp(20%, 25%, 30%)">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb="30px"
                    color={shades.secondary[500]}
                    sx={{ cursor: 'pointer' }}
                >Contact Us</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}> 13th Street. 47 W 13th St, New York, NY</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }}>E-mail: contact@ecommer.com</Typography>
                <Typography variant="h4" fontWeight="bold" mb="30px" sx={{ cursor: 'pointer' }} />+55 (51)99999-9999
            </Box>
        </Box>
    </Box >;
};

export default Footer;