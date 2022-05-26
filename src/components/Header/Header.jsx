import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Dropdown } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, '< user in header')
    return (
        <Segment clearing>
            <Header floated="left">
                <Link to='/'>Albumfy</Link>
            </Header>
            <Header floated="right">
                <Link to=''>
                    <Image src={user?.photoUrl ? user?.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                        avatar
                    ></Image>
                </Link>
                <Dropdown item>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to='/'>Feed</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/${user?.username}`}>My favorites</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='' onClick={handleLogout}>Logout</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
        </Segment>
    )
}