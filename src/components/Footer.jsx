import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-2b32c58cb1/icons';

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50 mb-4">&copy; {new Date().getFullYear()} Glenn Basgaard. All rights reserved.</p>
      <a className="mx-2 text-midnight dark:text-cream" href="https://github.com/diztinct-glenn" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['square-github']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://www.linkedin.com/in/glenn-basgaard/" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://open.spotify.com/user/gbasgaard?si=daa83008a66844d5" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['spotify']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://music.apple.com/profile/gBasgaard" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['itunes-note']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://www.instagram.com/gbasgaard/" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['square-instagram']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://twitter.com/gBasgaard" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['square-x-twitter']} size="2x" /></a>
      <a className="mx-2 text-midnight dark:text-cream" href="https://www.goodreads.com/user/show/5467601-glenn" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['goodreads']} size="2x" /></a>
    </div>
  )
}

export default Footer;
