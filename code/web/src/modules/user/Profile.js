// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { routeImage, routes } from '../../setup/routes'



// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component

const Profile = (props) => {
  const imageRoute = "http://localhost:8000/images/uploads/"
  const profilePicRoute = props.user.details.image
  
  return (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

   

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* <Grid> */}
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <h3>Shipping Address:</h3>
        <p>{props.user.details.shippingAddress}</p>
        <br />
        <h3>Description:</h3>
        <p>{props.user.details.description}</p>
      </GridCell>
    {/* </Grid> */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Link to={userRoutes.editProfile.path}>
          <Button theme="secondary">Edit Profile</Button>
        </Link>
        <img src={imageRoute + profilePicRoute} alt="profile"/>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)
  }

// Component Properties.
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}


// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
