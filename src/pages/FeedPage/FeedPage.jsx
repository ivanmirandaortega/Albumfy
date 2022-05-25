import React, { useEffect, useState } from 'react'
import { Grid } from "semantic-ui-react";
import PageHeader from '../../components/Header/Header'
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PostGallery from '../../components/PostGallery/PostGallery'
import Loading from '../../components/Loader/Loader'
import * as postsAPI from '../../utils/postApi'
import * as likesAPI from '../../utils/likeApi'

export default function FeedPage({ user, handleLogout }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    async function handleAddPost(post) {
        try {
            setLoading(true);
            const data = await postsAPI.create(post);
            console.log(data, " this is response from the server, in handleAddPost");
            setPosts([data.post, ...posts]);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }

    async function getPosts() {
        try {
            const data = await postsAPI.getAll();
            console.log(data, " this is data,");
            setPosts([...data.posts]);
            setLoading(false);
        } catch (err) {
            console.log(err.message, " this is the error");
            setError(err.message);
        }
    }

    async function addLike(postId) {
        try {
            const data = await likesAPI.create(postId)
            console.log(data, '< the response from the server when we make a like')
            getPosts()
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    async function removeLike(likeId) {
        try {
            const data = await likesAPI.removeLike(likeId)
            console.log(data, '< this is the response from the server when we remove a like')
            getPosts()
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    if (error) {
        return (
            <>
                <PageHeader user={user} />
                <ErrorMessage error={error} />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <PageHeader user={user} />
                <Loading />
            </>
        )
    }


    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddPostForm handleAddPost={handleAddPost} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 850 }}>
                    <PostGallery
                        posts={posts}
                        numPhotosCol={3}
                        user={user}
                        isProfile={false}
                        loading={loading}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}