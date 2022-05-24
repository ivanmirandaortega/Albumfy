import React from 'react'
import { Grid } from "semantic-ui-react";
import PageHeader from '../../components/Header/Header'
import AddPostForm from '../../components/AddPostForm/AddPostForm';

export default function FeedPage() {
    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddPostForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}