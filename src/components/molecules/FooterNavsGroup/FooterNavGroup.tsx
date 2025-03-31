import FooterNavs from "@/components/atoms/FooterNavs";
import { Stack } from "@mui/material";
import { FooterLinks } from "@utils/FooterLinks";


const FooterNavGroup = () => {
    return (
        <Stack spacing={10} sx={{ width: "fit-content", position:"relative", m: "0 auto", mt: 7 }} direction={"row"}>
            <FooterNavs content={FooterLinks.inicio} />
            <FooterNavs content={FooterLinks.contact} />
            <FooterNavs content={FooterLinks.social} />
        </Stack>
    )
};

export default FooterNavGroup;