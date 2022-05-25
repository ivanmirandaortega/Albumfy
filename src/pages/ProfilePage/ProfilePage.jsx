import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import PageHeader from '../../components/Header/Header'
import PostGallery from '../../components/PostGallery/PostGallery'
import Loading from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService'
import * as likesAPI from '../../utils/likeApi'

export default function ProfilePage(props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    const { username } = useParams()
    console.log(username, 'username')

    async function addLike(postId) {
        try {
            const data = await likesAPI.create(postId)
            console.log(data, '< the response from the server when we make a like')
            getProfile()
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    async function removeLike(likeId) {
        try {
            const data = await likesAPI.removeLike(likeId)
            console.log(data, '< the response from the server when we remove a like')
            getProfile()
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    async function getProfile() {
        try {
            const data = await userService.getProfile(username);
            console.log(data, " < -- data");
            setLoading(() => false);
            setUser(() => data.user);
            setPosts(() => data.posts);
        } catch (err) {
            console.log(err);
            setError("Profile doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    if (error) {
        return (
            <>
                <PageHeader user={props.user} />
                <ErrorMessage error={error} />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <PageHeader user={props.user} />
                <Loading />
            </>
        )
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <PostGallery
                        isProfile={true}
                        posts={posts}
                        numPhotosCol={3}
                        user={props.user}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}