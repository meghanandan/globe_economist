import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | The Globe Economist` : "The Globe Economist | Integrated Economics Review";

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
