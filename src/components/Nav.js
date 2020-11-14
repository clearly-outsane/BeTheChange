import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AiOutlineUser } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import Typography from '@material-ui/core/Typography'

const Nav = () => {
    return (
        <div class='nav '>
            <Grid
                container
                justify='space-between'
                style={{ width: '100%' }}
                alignItems='center'
            >
                <div>
                    <Typography>BeTheChange.</Typography>
                </div>

                <div>
                    {/* <BiCart size={18} style={{ marginRight: 48 }} /> */}
                    <AiOutlineUser size={24} />
                </div>
            </Grid>
        </div>
    )
}

export default Nav
