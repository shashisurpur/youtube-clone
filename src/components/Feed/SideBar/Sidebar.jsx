import {  Stack } from '@mui/material'
import React from 'react'
import { categories } from '../../../utils/constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                flexDirection: { md: 'column' },
                height: { xs: 'auto', md: '95%' }
            }}
        >
            {
                categories.map((category) => (
                    <button
                   className="category-btn"
                        onClick={() => setSelectedCategory(category.name)}
                        
                        style={{
                            background: category.name === selectedCategory && "#FC1503",
                            color: "white",
                            // '&:hover':{
                            //     backgroundColor: "#FC1503 !important",
                            //     color: "white !important"
                            // }
                        }}
                        key={category.name}
                    >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>

                    </button>
                ))
            }
        </Stack>
    )
}

export default Sidebar