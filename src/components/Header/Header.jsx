import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user }) {
    console.log(user, '< user in header')
    return (
        <Segment clearing>
            <Header floated="left">
                <Link to='/'>App Name</Link>
            </Header>
            <Header floated="right">
                <Link to=''>
                    <Image src={user?.photoUrl ? user?.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                        avatar
                    ></Image>
                </Link>
            </Header>
        </Segment>
    )
}