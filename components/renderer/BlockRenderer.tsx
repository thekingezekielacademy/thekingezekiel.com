import React from 'react';

// Import block components (we will create/refactor these next)
import { Heading } from '../blocks/Heading';
import { Paragraph } from '../blocks/Paragraph';
import { Columns } from '../blocks/Columns';
import { Column } from '../blocks/Column';
import { Image } from '../blocks/Image';
import { Button } from '../blocks/Button';
import { Group } from '../blocks/Group';
import { Spacer } from '../blocks/Spacer';

export interface BlockData {
  type: string;
  props: Record<string, any>;
  children?: BlockData[];
}

interface BlockRendererProps {
  blocks: BlockData[];
}

const componentMap: Record<string, React.ComponentType<any>> = {
  'heading': Heading,
  'paragraph': Paragraph,
  'columns': Columns,
  'column': Column,
  'image': Image,
  'button': Button,
  'group': Group,
  'spacer': Spacer,
  // Add fallback for types that just map to their children, e.g. buttons
  'buttons': Group,
  'list': Paragraph, // Temporary mapping for lists
  // Add other blocks as we build them
};

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        // Skip raw_html if it's just whitespace
        if (block.type === 'raw_html') {
           const html = block.props?.html || '';
           if (!html.trim()) return null;
           // If there is actual html, we can optionally render it dangerously
           // return <div key={index} dangerouslySetInnerHTML={{ __html: html }} />;
           return null; // For now, we rely entirely on the normalized text
        }

        const Component = componentMap[block.type];

        if (!Component) {
          // Fallback if component is missing
          console.warn(`No component found for block type: ${block.type}`);
          return block.children ? <BlockRenderer key={index} blocks={block.children} /> : null;
        }

        return (
          <Component key={index} {...block.props}>
            {block.children && <BlockRenderer blocks={block.children} />}
          </Component>
        );
      })}
    </>
  );
};
