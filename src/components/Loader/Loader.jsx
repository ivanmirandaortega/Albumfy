import { Grid, Loader } from 'semantic-ui-react'

export default function Loading() {
    return (
        <Grid>
            <Grid.Column>
                <Loader>Loading</Loader>
            </Grid.Column>
        </Grid>
    )
}