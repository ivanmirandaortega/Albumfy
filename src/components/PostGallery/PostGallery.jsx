import React from 'react';
import { Card, Dimmer, Segment, Image } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';

export default function PostFeed({ posts, numPhotosCol, user, isProfile, loading, addLike, removeLike }) {
    return (
        <Card.Group itemsPerRow={numPhotosCol}>
            {posts.map((post) => {
                return (
                    <PostCard
                        post={post}
                        key={post._id}
                        user={user}
                        isProfile={isProfile}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                )
            })}
        </Card.Group>
    )
}