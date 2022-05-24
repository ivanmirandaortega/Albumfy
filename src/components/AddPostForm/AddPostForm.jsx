import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPostForm() {
    return (
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment>
                    <Form>
                        <Form.Input
                            placeholder="Share your favorite music album"
                        />
                        <Form.Input
                            type='file'
                        />
                        <Button type='submit' className='btn'>Add Post</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}