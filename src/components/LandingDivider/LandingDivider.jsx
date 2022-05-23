import React from 'react'
import { Grid } from 'semantic-ui-react'
import './LandingDivider.css'

export default function (props) {
    return (
        <Grid.Column
            className='LandingDivider'
            width={8}
            style={{ padding: 0, margin: 0 }}
        ></Grid.Column>
    )
}