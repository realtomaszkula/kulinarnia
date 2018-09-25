import { Link } from 'gatsby';
import * as React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const YoutubeIcon: React.StatelessComponent<{
  className: string;
}> = ({ className }) => (
  <Link to="path/to/youtube" className={className}>
    <FaYoutube />
  </Link>
);

export const InstagramIcon: React.StatelessComponent<{
  className: string;
}> = ({ className }) => (
  <Link to="path/to/instagram" className={className}>
    <FaInstagram />
  </Link>
);

export const FacebookIcon: React.StatelessComponent<{
  className: string;
}> = ({ className }) => (
  <Link to="path/to/facebook" className={className}>
    <FaFacebook />
  </Link>
);
