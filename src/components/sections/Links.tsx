import { PRESAVE_LINK } from '@/helpers/links';
import { renderIcon } from '../UI/renderIcon';

const Links = () => {
  const spotifyIcon = renderIcon({
    iconName: 'spotify',
    alt: 'Find on Spotify',
    height: 50,
    width: 100,
  });
  const appleMusicIcon = renderIcon({
    iconName: 'apple-music',
    alt: 'Find on Apple Music',
    height: 50,
    width: 100,
  });
  const deezerIcon = renderIcon({
    iconName: 'deezer',
    alt: 'Find on Deezer',
    height: 50,
    width: 100,
  });

  return (
    <section className="links">
      <div className="links__flex-container">
        <a href={PRESAVE_LINK} className="links__icon">
          {spotifyIcon}
        </a>
        <a href={PRESAVE_LINK} className="links__icon">
          {appleMusicIcon}
        </a>
        <a href={PRESAVE_LINK} className="links__icon">
          {deezerIcon}
        </a>
      </div>
    </section>
  );
};

export default Links;
