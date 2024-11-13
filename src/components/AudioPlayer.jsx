import React, { useRef, useEffect } from 'react';

const AutoPlayAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playPromise = audioRef.current.play();

    // Handling autoplay restrictions
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented
          console.error('Autoplay was prevented:', error);
        });
    }
  }, []);

  return (
    <audio ref={audioRef} controls>
      <source src="assets/media/VO 1-2_mixdown.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default AutoPlayAudio;
