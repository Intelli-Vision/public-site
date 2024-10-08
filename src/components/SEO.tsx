import React from "react";
import { Helmet } from "react-helmet-async";
import { description, image, keywords, title, url } from "../data";

export default function SEO() {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
      </Helmet>
    </div>
  );
}
