import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function PostCard({ post, user }) {

    return (
        <Card key={post._id}>
            <Image src={`${post.photoUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Description>{post.caption}</Card.Description>
            </Card.Content>
            <Card.Content textAlign={"right"}>
                <Icon
                    name={"heart"}
                /> Add to favorites
            </Card.Content>
        </Card>
    )
}