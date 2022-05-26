import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function PostCard({ post, user, isProfile, removeLike, addLike }) {
    const likeIndex = post.likes.findIndex(
        (like) => like.username === user.username
    )

    const clickHandler =
        likeIndex > -1 ? () => removeLike(post.likes[likeIndex]._id) : () => addLike(post._id)

    const likeColor = likeIndex > -1 ? "red" : "grey"

    const likeText = likeIndex > -1 ? "Remove from favorites" : "Add to favorites"

    return (
        <Card key={post._id}>
            <Image src={`${post.photoUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Description>{post.caption}</Card.Description>
            </Card.Content>
            <Card.Content textAlign={"right"}>
                <Icon
                    name={"heart"}
                    color={likeColor}
                    onClick={clickHandler}
                /> {likeText}
            </Card.Content>
        </Card>
    )
}