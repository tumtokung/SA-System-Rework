import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { Navbar, LeftBar, MenuList } from '@/components/Navbar';
import { useMediaQuery, useTheme } from '@mui/material';

function Layout({ children }) {
  // hook
  const [isOpenLeftBar, setIsOpenLeftBar] = useState(false);
  const { data: session } = useSession();
  const router = useRouter()
  const theme = useTheme()
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  // variable
  const conditionNav = router.asPath != "/" && router.asPath != "/login" && session
  // function
  const toggleLeftBar = () => setIsOpenLeftBar(prev => !prev);


  return (
    <Stack flexDirection="row" >

      {conditionNav && isUpLg ?
        <MenuList isOpenMenu={isOpenLeftBar} />
        :
        conditionNav && <LeftBar isOpenMenu={isOpenLeftBar} toggleMenu={toggleLeftBar} />
      }

      <Stack width="100%">
        {conditionNav && <Navbar toggleLeftBar={toggleLeftBar} />}
        <Box sx={{ p: conditionNav ? 4 : 0, bgcolor: "#EEF2F6", height: "100%" }}>
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
export default Layout
