import Image from 'next/image';

import albumArtNoText from '../../assets/album-art-no-border-no-text.jpeg';

const AlbumArtwork = () => (
  <section className="album-artwork">
    <div className="album-artwork__image-container">
      <Image
        alt=""
        fill
        src={albumArtNoText}
        className="album-artwork__image"
        priority
      />
    </div>
  </section>
);

export default AlbumArtwork;
