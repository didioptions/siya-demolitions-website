
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/demolition-johannesburg',
        permanent: true,
      },
      {
        source: '/demolition-services',
        destination: '/demolition-johannesburg',
        permanent: true,
      },
      {
        source: '/johannesburg',
        destination: '/demolition-johannesburg',
        permanent: true,
      },
      {
        source: '/demolishing-a-home-in-johannesburg',
        destination: '/demolition-johannesburg',
        permanent: true,
      },
       {
        source: '/rubble-removal',
        destination: '/rubble-removal-johannesburg',
        permanent: true,
      },
      {
        source: '/pretoria',
        destination: '/demolition-pretoria',
        permanent: true,
       },
       {
        source: '/site-cleaning',
        destination: '/site-cleaning-johannesburg',
        permanent: true,
       },
       {
        source: '/tree-felling',
        destination: '/tree-felling-johannesburg',
        permanent: true,
       },
       {
        source: '/swimming-pool-demolition',
        destination: '/swimming-pool-demolition-johannesburg',
        permanent: true,
       },
       {
        source: '/plant-hire',
        destination: '/plant-hire-johannesburg',
        permanent: true,
       }
    ]
  },
};

export default nextConfig;
