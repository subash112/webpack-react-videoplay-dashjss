import React from 'react';
import { Link } from 'react-router-dom';
import playIcon from '../../../Assets/Images/play_icon.png';
import './playButton.scss';

const PlayButton = (props) => {
  return (
    <>
      <div className='play-button'>
        <Link to={`/stream/movie/${props.id}`} data-testid='PlayButton'>
          <img src={playIcon} alt='play icon' height='100' width='100' />
        </Link>
      </div>
    </>
  );
};

export default PlayButton;
