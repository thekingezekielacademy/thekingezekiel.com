import React from 'react';
import { HeroHeading, TextContent, YouTubePlayer, ImageCarousel, ImageBlock, ActionButton } from './DynamicComponents';

export const DynamicTemplate = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || blocks.length === 0) {
    return <div className="p-12 text-portfolio-muted text-center">No content available for this page.</div>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            const isCoursesPromoHeading = block.text && block.text.toUpperCase().includes('COURSES FOR SALE');
            return (
              <React.Fragment key={index}>
                <HeroHeading text={block.text} />
                {isCoursesPromoHeading && (
                  <ActionButton text="View All Courses" url="https://thekingezekielacademy.com/" />
                )}
              </React.Fragment>
            );
          
          case 'text':
            const isCoursesPromoText = block.html && block.html.toUpperCase().includes('COURSES THAT MIGHT INTEREST YOU');
            return (
              <React.Fragment key={index}>
                <TextContent html={block.html} />
                {isCoursesPromoText && (
                  <ActionButton text="Explore The Academy" url="https://thekingezekielacademy.com/" />
                )}
              </React.Fragment>
            );
          
          case 'youtube':
            return <YouTubePlayer key={index} url={block.url} />;
          
          case 'carousel':
            return <ImageCarousel key={index} images={block.images} />;
            
          case 'image':
            return <ImageBlock key={index} url={block.url} />;
            
          case 'button':
            return <ActionButton key={index} text={block.text} url={block.url} />;

          default:
            // Ignore unknown block types silently in production
            return null;
        }
      })}
    </div>
  );
};
