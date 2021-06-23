import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const loader = () => {
  return (
    <Player
      autoplay
      loop
      src='https://assets2.lottiefiles.com/packages/lf20_qgdcqwbg.json'
      style={{ height: '300px', width: '300px' }}
    >
      <Controls
        visible={false}
        buttons={['play', 'repeat', 'frame', 'debug']}
      />
    </Player>
  );
};

export default loader;
