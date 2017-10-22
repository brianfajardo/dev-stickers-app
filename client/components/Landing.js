import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

const Landing = () => (
  <div id="landing">
    <Header emoji="👋" emojiAriaLabel="hand wave" text="Hey there!" />
    <p>
      {"It's"} good to have you! We invite you to browse our collection of your favourite Web dev
      stickers. Whether {"you're"} a member of #NodeMasterRace, a vanilla JavaScript purist, or the
      type of person to use commas, we got what you need to trick out your laptop!
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
