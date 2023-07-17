import Image from 'next/image';

import albumArtNoText from '../../assets/album-art-no-border-no-text.jpeg';

const AlbumBackground = () => (
  <div className="">
    <Image
      alt=""
      fill
      src={albumArtNoText}
      objectFit="cover"
      className="hero__album-image"
    />
  </div>
);

export default AlbumBackground;
