import dynamic from 'next/dynamic';

const icons = {
  GitHub: dynamic(() => import('./icons/github.svg')),
  Instagram: dynamic(() => import('./icons/instagram.svg')),
  LinkedIn: dynamic(() => import('./icons/linkedin.svg')),
};

export default icons;
