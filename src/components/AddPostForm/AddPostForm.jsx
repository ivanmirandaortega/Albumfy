import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddPostForm(props) {
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        caption: ''
    })

    function handleFileInput(e) {
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', selectedFile)
        formData.append('caption', state.caption)

    }

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