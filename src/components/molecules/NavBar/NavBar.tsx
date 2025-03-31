"use client";

import React from 'react';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavBarButton from '@/components/atoms/NavBarButton/NavBarButton';


// Utils
import { links } from '@utils/AppBarLinks';

// Styles
import { stackStyle } from './styles';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Stack spacing={2} direction={"row"} sx={stackStyle}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} passHref style={{textDecoration: 'none'}}>
            <NavBarButton label={link.label} isSelected = {pathname == link.href}/>

          </Link>
        ))}
    </Stack>
    )
};

export default NavBar;