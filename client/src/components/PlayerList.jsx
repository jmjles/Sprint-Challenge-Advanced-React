import React, { Component } from 'react'
import Player from './Player'
import { Grid } from '@material-ui/core'
const axios = require('axios')
class PlayerList extends Component {
    state={
        players:[]
    }
    async componentDidMount(){
        const res = await axios('http://localhost:5000/api/players')
        const data = res.data
        this.setState({
            players:data
        })
    }
    render() {
        return (
            <Grid container justify='space-between'>
                {
                    this.state.players.map((player)=>(
                        <Player key={player.id} player={player}/>
                    ))
                }
            </Grid>
        )
    }
}
export default PlayerList