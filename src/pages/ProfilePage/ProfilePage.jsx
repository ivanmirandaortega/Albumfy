import React from 'react'
import { Grid } from 'semantic-ui-react'
import PageHeader from '../../components/Header/Header'
import PostGallery from '../../components/PostGallery/PostGallery'

export default function ProfilePage(props) {

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    {/* <PostGallery /> */}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}