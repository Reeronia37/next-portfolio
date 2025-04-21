interface IRedirect {
  source: string;
  destination: string | any;
  permanent: boolean;
}

export const urls = {
  discord: 'https://discord.gg/Bursa',
  github: 'https://github.com/Reeronia37',
  youtube: 'https://youtube.com/@realkramp',
  spotify: 'https://open.spotify.com/intl-es/artist/realkramp',
  instagram: 'https://instagram.com/realkramp',
};

export const redirects: IRedirect[] = [
  { source: '/discord', destination: urls.discord, permanent: true },
  { source: '/discord-server', destination: '/discord', permanent: true },
  { source: '/youtube', destination: urls.youtube, permanent: true },
  { source: '/spotify', destination: urls.spotify, permanent: true },
  { source: '/github', destination: urls.github, permanent: true },
  { source: '/instagram', destination: urls.instagram, permanent: true },
  { source: '/youngxsanty', destination: 'https://guns.lol/youngxsanty', permanent: true },
  { source: '/r/:path*', destination: '/:path*', permanent: true },
];
