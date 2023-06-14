import { Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MenuList from './MenuList';

function LeftBar({ isOpenMenu = false, toggleMenu = () => { } }) {
    const router = useRouter();

    useEffect(()=>{
        toggleMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[router])

    return (
        <Drawer
            anchor={"left"}
            open={isOpenMenu}
            onClose={toggleMenu}
        >
            <MenuList isOpenMenu={isOpenMenu}/>
        </Drawer>
    )
}

export default LeftBar;
