import React from "react";
import { Grid } from "semantic-ui-react"
import LandingDivider from "../../components/LandingDivider/LandingDivider";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage(props) {
  return (
    <Grid style={{ height: '100vh', padding: 0, margin: 0 }} verticalAlign='middle'>
      <Grid.Row style={{ padding: 0, margin: 0 }}>
        <LandingDivider />
        <LoginForm handleSignUpOrLogin={props.handleSignUpOrLogin} />
      </Grid.Row>
    </Grid>
  );
}
