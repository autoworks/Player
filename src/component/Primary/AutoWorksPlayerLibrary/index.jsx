import React from 'react'

import Player from '@/component/Structure/Player'

const AutoWorksPlayer = (props) => (
  <div>
    <Player {...props} />
    <div id="player-portal" />
  </div>
)

AutoWorksPlayer.propTypes = Player.propTypes

AutoWorksPlayer.displayName = 'AutoWorksPlayer'

export default AutoWorksPlayer
