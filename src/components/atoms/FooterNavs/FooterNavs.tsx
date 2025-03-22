import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface item {
    title: string;
    path: string;
}

interface FooterNavsProps {
    content: item[];


}

const FooterNavs: React.FC<FooterNavsProps> = ({ content }) => {
    return (
        <Stack direction={"column"} spacing={1.5}>
            {content.map((item, index) => (
                <Link href={item.path} key={index} passHref style={{textDecoration: "none"}} >
                    <Typography variant="body1" fontWeight={"bold"} color={index === 0 ? "secondary" : "textPrimary"} >
                        {item.title}
                    </Typography>
                </Link>
            ))

            }

        </Stack>



    );

};

export default FooterNavs;