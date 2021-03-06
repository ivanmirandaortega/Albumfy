import React, { useState } from "react";
// import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";

export default function LoginForm(props) {
    const [error, setError] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await userService.login(state)
            props.handleSignUpOrLogin()
            navigate('/')
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign='middle' padded="horizontally">
            <Grid.Row style={{ padding: 0, margin: 0 }}>
                <Grid.Column style={{ maxWidth: 950, paddingLeft: '20rem' }}>
                    <Header as="h1" textAlign="center" style={{ color: '#fff' }}>Login</Header>
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Segment style={{ background: '#1A1A1A' }}>
                            <Form.Input
                                placeholder="email"
                                name="email"
                                type="email"
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                placeholder="password"
                                name="password"
                                type="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                            <Button
                                fluid
                                type="submit"
                                className="btn"
                                size="large"
                                color="pink"
                            >Login</Button>
                        </Segment>
                    </Form>
                    <Message style={{ background: '#1A1A1A', color: '#fff' }}>
                        Don't have an account? <Link to="/signup" className="form-link">Sign Up</Link>
                    </Message>
                    {error ? <ErrorMessage error={error} /> : null}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}