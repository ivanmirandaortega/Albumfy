import React from "react";
import { Grid } from "semantic-ui-react";
import LandingDivider from "../../components/LandingDivider/LandingDivider";
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPage(props) {
  return (
    <Grid style={{ height: '100vh', padding: 0, margin: 0 }} verticalAlign='middle'>
      <Grid.Row style={{ padding: 0, margin: 0 }}>
        <LandingDivider />
        <SignUpForm handleSignUpOrLogin={props.handleSignUpOrLogin} style={{ textAlign: 'center' }} />
      </Grid.Row>
    </Grid>
  );
}
