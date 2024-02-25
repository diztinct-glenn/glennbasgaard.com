import React from 'react';

function PortfolioItem({ title, videoPlaceholder, videoSrc, stack, link}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-midnight dark:border-cream rounded-md overflow-hidden">
      {/* <img src={videoSrc} alt="" className="w-full h-36 md:h-48 object-cover cursor-pointer"/> */}
      <video loop autoPlay muted poster={videoPlaceholder}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="w-full p-4 text-center">
        <h3 className="text-lg md:text-xl dark:text-cream font-semibold">{title}</h3>
      </div>
    </a>
  )
}

export default PortfolioItem;
