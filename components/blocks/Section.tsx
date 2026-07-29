import ElementorRenderer, { ElementData } from '../ElementorRenderer';

interface Props {
  element: ElementData;
}

export default function Section({ element }: Props) {
  const settings = element.settings || {};
  
  // Basic section layout settings
  const isBoxed = settings.layout !== 'full_width';
  
  // Backgrounds and Paddings (simplified map for now)
  const bgType = settings.background_background;
  const padding = settings.padding || { top: '40', right: '0', bottom: '40', left: '0', unit: 'px' };
  
  let inlineStyle: any = {
    paddingTop: padding.top ? `${padding.top}${padding.unit || 'px'}` : undefined,
    paddingBottom: padding.bottom ? `${padding.bottom}${padding.unit || 'px'}` : undefined,
    paddingLeft: padding.left ? `${padding.left}${padding.unit || 'px'}` : undefined,
    paddingRight: padding.right ? `${padding.right}${padding.unit || 'px'}` : undefined,
  };

  if (bgType === 'classic' && settings.background_color) {
    inlineStyle.backgroundColor = settings.background_color;
  }
  
  // For Elementor Sections, columns sit side-by-side
  const innerWrapperClass = isBoxed ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap" : "w-full flex flex-wrap";

  return (
    <section className="relative w-full" style={inlineStyle}>
      <div className={innerWrapperClass}>
        <ElementorRenderer elements={element.elements || []} />
      </div>
    </section>
  );
}
