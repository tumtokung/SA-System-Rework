import { Box, Divider, Stack, Typography, Grow, useTheme } from '@mui/material';
import Image from 'next/image';
import { logoSA } from 'public/assets';
import Link from 'next/link';
import { useMenuListStyles } from './styles';
import { useSession } from "next-auth/react";
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HistoryIcon from '@mui/icons-material/History';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';


const menus = [
    {
        path: "/Home",
        comp: (<HomeIcon fontSize="large" color="white" />),
        name: "หน้าหลัก"
    },
    {
        path: "/Dashboard",
        comp: (<LeaderboardIcon fontSize="large" color="white" />),
        name: "แดชบอร์ด"
    },
    {
        path: "/Request",
        comp: (<AddBoxIcon fontSize="large" color="white" />),
        name: "คำร้อง"
    },
    {
        path: "/History",
        comp: (<HistoryIcon fontSize="large" color="white" />),
        name: "ประวัติ"
    },
    {
        path: "/Setting",
        comp: (<SettingsIcon fontSize="large" color="white" />),
        name: "ตั้งค่า"
    },

    
]

const MenuList = ({ isOpenMenu = false }) => {
    // hook\
    const theme = useTheme();
    const classes = useMenuListStyles();
    const { data: session } = useSession();
    const router = useRouter()

    //component 
    const AnimationWrap = ({ children }) => {
        return (
            <Grow in={isOpenMenu}
                style={{ transformOrigin: '0 0 0' }}
                {...(isOpenMenu ? { timeout: 300 } : {})}>
                {children}
            </Grow>
        );
    }
    return (
        <Box sx={{ width: isOpenMenu ? 250 : 70 }} className={classes.container}>

            <Link href="/Home" className={classes.header}>
                <Image src={logoSA} alt="logo" height={40} />

                <Typography variant="h6" color="text.white" sx={{ ml: 4 }}>
                    {isOpenMenu ? "SA" : ""}
                </Typography>

            </Link>


            <Box sx={{ mt: isOpenMenu ? 4 : 0, width: "100%" }}>
                {isOpenMenu &&
                    <Box className={classes.profile}>
                        {/* <Avatar alt="Profile avater" src={session?.user?.image} /> */}
                        <Stack spacing={2} sx={{ ml: 2 }}>
                            <Typography variant="subtitle2" color="black">
                                ชื่อ: {session?.user?.name}
                            </Typography>
                            <Typography variant="subtitle2" color="black">
                                ตำแหน่ง: {"นิสิต"}
                            </Typography>
                            <Typography variant="subtitle2" color="error.main">
                                สถานะ: {"ยังใส่ข้อมูลไม่ครบ"}
                            </Typography>
                        </Stack>
                    </Box>
                }
            </Box>


            <Divider className={classes.divider} />
            <Stack spacing={2} sx={{ width: "100%" }}>
                {
                    menus.map((menu, index) => {
                        const color = theme.palette;
                        const isFocus = router.asPath == menu.path
                        return (
                            <Link
                                key={menu.name + index}
                                href={menu.path}
                                className={classes.MenuLink}
                                style={{ backgroundColor: isFocus ? color.secondary.main : color.primary.main }}>
                                {menu.comp}
                                <Typography variant="body2" color="text.white" sx={{ ml: 4 }}>
                                    {isOpenMenu ? menu.name : ""}
                                </Typography>
                            </Link>
                        )
                    })
                }
            </Stack>
        </Box >
    );
}

export default MenuList;