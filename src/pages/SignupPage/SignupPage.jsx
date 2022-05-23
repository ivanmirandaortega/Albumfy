import React from "react";
import { Grid } from "semantic-ui-react";
import SignUpSide from "../../components/LandingDivider/LandingDivider";
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPage(props) {
  return (
    <Grid textAlign="center" style={{ height: '100vh', padding: 0, margin: 0 }} verticalAlign='middle'>
      <Grid.Row style={{ padding: 0, margin: 0 }}>
        <SignUpSide />
        <SignUpForm handleSignUpOrLogin={props.handleSignUpOrLogin} />
      </Grid.Row>
    </Grid>
  );
}
