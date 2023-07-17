import Image from 'next/image';

import albumArtNoText from '../../assets/album-art-no-border-no-text.jpeg';

const AlbumBackground = () => (
  <div className="hero__album-background">
    <Image alt="" fill src={albumArtNoText} objectFit="cover" />
  </div>
);

export default AlbumBackground;
