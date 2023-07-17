import Image from 'next/image';

import albumArtNoText from '../../assets/album-artwork.png';

const ALbumArtwork = () => (
  <div className="hero-background">
    <Image
      alt=""
      fill
      src={albumArtNoText}
      objectFit="contain"
      className="hero-background__album-image"
    />
  </div>
);

export default ALbumArtwork;
