import React from 'react'
import {Grid, Card,Typography as Font} from '@material-ui/core'
function Player({player:{name,country}}) {
    return (
        <Grid item xs={5} md={4}>
            <Card elevation={5} align='center'>
                <Font variant='h4'>
                    {name}
                </Font>
                <Font variant='body1'>
                    {country}
                </Font>
            </Card>
        </Grid>
    )
}

export default Player
