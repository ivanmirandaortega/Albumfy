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
        props.handleAddPost(formData)
    }

    return (
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment className='post-form'>
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Input
                            placeholder="Share your favorite music album"
                            name="caption"
                            value={state.caption}
                            onChange={handleChange}
                            required
                            style={{ background: 'red' }}
                        />
                        <Form.Input
                            type='file'
                            className='form-control'
                            name='photo'
                            onChange={handleFileInput}
                        />
                        <Button type='submit' className='btn post' >Add Post</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}