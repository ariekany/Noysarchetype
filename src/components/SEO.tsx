import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export default function SEO({ title, description, image }: SEOProps) {
  React.useEffect(() => {
    document.title = `${title} | Muhammad Arief Furqany`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
