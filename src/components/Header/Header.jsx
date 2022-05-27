import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Dropdown } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, '< user in header')
    return (
        <Segment clearing style={{ background: "#1A1A1A" }}>
            <Header floated="left">
                <Link to='/' style={{ color: '#fff' }}>Albumfy</Link>
            </Header>
            <Header floated="right">
                <Link to=''>
                    <Image src={user?.photoUrl ? user?.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                        avatar
                        className="avatar"
                    ></Image>
                </Link>
                <Dropdown item>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to='/' className="drop-link">Feed</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/${user?.username}`} className="drop-link">My favorites</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='' onClick={handleLogout} className="drop-link">Logout</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
        </Segment>
    )
}