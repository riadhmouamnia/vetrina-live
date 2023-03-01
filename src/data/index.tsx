import {ReactNode} from 'react';
import {Capterra, DomainIcon, TrustpilotIcon} from '../components/Icons';
export const configCard = {
  title: 'Configura la tua vetrina',
  progress: 0,
  description:
    'Completa tutti i step per ricevere maggiore visibilità e una vetrina  accattivante ',
  linkText: 'Completa la configurazione!',
};

export const dashboardCoverlink = {
  link: 'app.vetrinalive.com/mario-store',
};

export const visitorsCard = {
  title: 'Visitors',
  total: 0,
  link: 'Vuoi ricevere più visite? Contattaci!',
  duration: [
    {key: '1', value: 'This week', tota: 10},
    {key: '2', value: 'This month'},
    {key: '3', value: 'This year'},
    {key: '4', value: 'Last week'},
    {key: '5', value: 'Last month'},
    {key: '6', value: 'Last year'},
  ],
};

export const ordersCard = {
  title: 'Orders',
  duration: [
    {key: '1', value: 'This week', tota: 10},
    {key: '2', value: 'This month'},
    {key: '3', value: 'This year'},
    {key: '4', value: 'Last week'},
    {key: '5', value: 'Last month'},
    {key: '6', value: 'Last year'},
  ],
  ordersRecived: 0,
  ernings: 0.0,
  link: '10 free tips to increase your sales',
};

export const latestNews = {
  title: 'Lastest news',
  link: 'Visita il nostro Blog',
  eCommerceTips: [
    {
      key: 1,
      title: 'E-COMMERCE TIPS',
      body: '13 tips on How to Write a Business Plan with success',
      author: 'Stima lettura: 5 min',
      image: require('assets/images/Image.png'),
    },
    {
      key: 2,
      title: 'E-COMMERCE TIPS',
      body: '10 profitable Things to make and sell Online for beginners',
      author: 'Stima lettura: 5 min',
      image: require('assets/images/Image2.png'),
    },
    {
      key: 3,
      title: 'E-COMMERCE TIPS',
      body: '10 profitable Things to make and sell Online for beginners',
      author: 'Stima lettura: 5 min',
      image: require('assets/images/Image3.png'),
    },
  ],
};

export interface CardData {
  key: number;
  link: string;
  icon?: any;
  title?: string;
  subTitle?: string;
  color?: string;
}

export interface ExtensionsData {
  title: string;
  link: string;
  cards: CardData[];
}

export const extentions: ExtensionsData = {
  title: 'Extensions Marketplace',
  link: 'Discover all extensions',
  cards: [
    {key: 1, link: 'Custom Domain', icon: <DomainIcon />, color: '#FFA26B'},
    {
      key: 2,
      link: '+ 50 Products',
      title: '+50',
      subTitle: 'Prodotti',
      color: '#00C48C',
    },
  ],
};

export const positiveReviews = {
  topIcon: <Capterra />,
  bottomIcon: <TrustpilotIcon />,
  topLink: 'Write a review on Capterra',
  bottomLink: 'Write a review on Trustpilot',
  footer: '* The two promotions are cumulative',
};

export const customerSupport = {
  title: 'Customer support',
  body: 'Simone is here to help you',
};

export const inviteFriend = {
  title: 'Invite a friend!',
  link: 'Start inviting friends!',
};

export const plansData = [
  {
    id: 1,
    title: 'Free',
    productsNum: 'Max 150 prodotti',
    yearly: 0,
    monthly: 0,
  },
  {
    id: 2,
    title: 'Vetrina',
    productsNum: 'Max 150 prodotti',
    yearly: 109,
    monthly: 10.99,
    promo: '2 mesi in regalo',
  },
  {
    id: 3,
    title: 'Negozio',
    productsNum: 'Max 150 prodotti',
    yearly: 209,
    monthly: 22.99,
    promo: '2 mesi in regalo',
  },
  {
    id: 4,
    title: 'Vetrina',
    productsNum: 'Max 150 prodotti',
    yearly: 399,
    monthly: 34.99,
    promo: '2 mesi in regalo',
  },
];
