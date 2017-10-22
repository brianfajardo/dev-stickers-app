import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div>
    <h1>
      Hey there!{' '}
      <span role="img" aria-label="hand wave">
        👋
      </span>
    </h1>
    <p>
      Welcome to the site where you can browse among our collection of your favourite Web dev
      stickers. Whether {"you're"} a Java purist or follow the church of Node.JS master race, we got
      your back! Stick {"'em"} on your laptop and be proud and loud!
    </p>
    <Link to="/collection">
      <Button animated color="green">
        <Button.Content visible>Browse Collection</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    </Link>
  </div>
)

export default Landing
