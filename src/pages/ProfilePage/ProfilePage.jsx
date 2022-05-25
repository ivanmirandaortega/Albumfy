import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import PageHeader from '../../components/Header/Header'
import PostGallery from '../../components/PostGallery/PostGallery'
import userService from '../../utils/userService'

export default function ProfilePage(props) {
    const [error, setError] = useState("")
    const [user, setUser] = useState({})

    const { username } = useParams()

    async function getProfile() {
        try {
            const data = await userService.getProfile(username)
            console.log(data, "< data")
            setUser(() => data.user)
        } catch (err) {
            console.log(err)
            setError("Profile doesn't exist, check terminal")
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    {/* <PostGallery /> */}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}