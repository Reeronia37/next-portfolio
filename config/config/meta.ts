export interface IAccount {
  username?: string;
  url: string;
  repo?: string;
  server?: string;
  id?: string | boolean;
}

export interface IMeta {
  version: string;
  title: string;
  description: string;
  shortDescription: string;
  url: string;
  webhook?: string;
  accounts: {
    github: IAccount;
    discord: {
      username?: string;
      server: string;
      id?: string | boolean;
    };
    youtube: IAccount;
    instagram: IAccount;
    spotify: IAccount;
  };
}

export const meta: IMeta = {
  version: '1.0.0',
  title: 'realkramp',
  description: 'Currently working on various projects. Stay tuned for updates.',
  shortDescription: 'Random developer from this planet.',
  url: 'https://69691243.vercel.app',
  webhook: `${process.env.DISCORD_WEBHOOK_URL}`,
  accounts: {
    github: {
      username: 'realkramp',
      repo: 'next-portfolio',
      url: `https://github.com/Reeronia37`,
    },
    discord: {
      username: '@realkramp',
      server: '/discord',
      id: /^(\d{17,20})$/.test(`${process.env.DISCORD_USER_ID}`) ? `${process.env.DISCORD_USER_ID}` : '974291732638339162',
    },
    youtube: {
      username: 'realkramp',
      url: '/youtube',
    },
    instagram: {
      username: 'realkramp',
      url: '/instagram',
    },
    spotify: {
      url: '/spotify',
    },
  },
};
