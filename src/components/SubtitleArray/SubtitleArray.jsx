import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SubtitleArray = ({ subtitle2 }) => {
  const [showIdx, setShowIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowIdx((i) => i + 0.5);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const display = subtitle2.map((show, i) => (
    <div
      key={show.subId}
      className={
        showIdx % subtitle2.length === i ? `hero-subtitle-show-active` : 'hero-subtitle-show-hidden'
      }
    >
      <h2 className="hero-subtitle-text">{show.text}</h2>
    </div>
  ));

  return <div className="hero-subtitle-show">{display}</div>;
};

export default SubtitleArray;

SubtitleArray.propTypes = { subtitle2: PropTypes.instanceOf(Array) };
