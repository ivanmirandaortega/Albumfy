import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function PostCard({ post }) {

    return (
        <Card>
            <Image />
            <Card.Content>
                <div>card</div>
            </Card.Content>
            <Card.Content textAlign={"right"}>
                <Icon
                    name={"heart"}
                /> Add to favorites
            </Card.Content>
        </Card>
    )
}