import React from 'react';
import AboutCard from '../components/AboutCard';
import Sidekick from '../components/Sidekick';

interface ContentItem {
  id: string;
  type: string;
  value: { [key: string]: any };
}

const components: Record<string, React.ComponentType<{ content: any }>> = {
  hero_section: Sidekick,
  welcome_message_section: AboutCard
};

export default function mapContentToComponents(content: ContentItem[]) {
  return content.map((item) => {
    const Component = components[item.type];
    if (!Component) {
      throw new Error(`Component not found for type: ${item.type}`);
    }
    return <Component key={item.id} content={item.value} />;
  });
}
