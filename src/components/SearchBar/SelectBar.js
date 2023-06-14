import * as React from 'react';
import { MenuItem, Select } from '@mui/material';

export default function SelectBar(value = "", placeholder = "placeholder", menuList = [], handleChange = () => {}) {
    
    // example handle change
    
    // const [age, setAge] = React.useState('');
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <Select
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{height: 50, bgcolor: "white.main"}}
        >
            
            <MenuItem value="" disabled> {placeholder} </MenuItem>
            {/* {menuList.map((menu, index)=>{
                return <MenuItem value={menu.value} key={index}>{menu.label}</MenuItem>
            })} */}
        </Select>
    );
}