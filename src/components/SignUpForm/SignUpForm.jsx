import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Segment, Message } from "semantic-ui-react";
import userService from "../../utils/userService";

export default function SignUpForm(props) {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    })
    const [selectedFile, setSelectedFile] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('photo', selectedFile)
        for (let fieldName in state) {
            formData.append(fieldName, state[fieldName])
        }
        try {
            await userService.signup(formData)
            props.handleSignUpOrLogin()
            navigate('/')
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleFileInput(e) {
        console.log(e.target.files);
        setSelectedFile(e.target.files[0]);

    }

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign='middle' padded="horizontally">
            <Grid.Row style={{ padding: 0, margin: 0 }}>
                <Grid.Column style={{ maxWidth: 950, paddingLeft: '20rem' }} verticalAlign="middle">
                    <Header as='h1' textAlign='center' style={{ color: '#fff' }}>Sign Up</Header>
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Segment style={{ background: '#1A1A1A' }}>
                            <Form.Input
                                placeholder='username'
                                name='username'
                                value={state.username}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                placeholder='email'
                                name='email'
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                placeholder='password'
                                name='password'
                                type="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                placeholder='confirm password'
                                name='passwordConf'
                                type="password"
                                value={state.passwordConf}
                                onChange={handleChange}
                                required
                            />
                            <Form.Field>
                                <Form.Input
                                    type='file'
                                    name='photo'
                                    onChange={handleFileInput}
                                />
                            </Form.Field>
                            <Button className="btn" size="large" fluid >Signup</Button>
                        </Segment>
                        <Message style={{ background: '#1A1A1A', color: '#fff' }}>
                            Already have an account? <Link to="/login" className="form-link">Login</Link>
                        </Message>
                        {error ? <ErrorMessage error={error} /> : null}
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    );
}