export default function Divider({ settings }: { settings: any }) {
  const width = settings.width?.size || 100;
  const weight = settings.weight?.size || 1;
  const gap = settings.gap?.size || 15;
  const align = settings.align || 'center';

  let alignClass = 'mx-auto';
  if (align === 'left') alignClass = 'ml-0 mr-auto';
  if (align === 'right') alignClass = 'ml-auto mr-0';

  return (
    <div style={{ paddingTop: `${gap}px`, paddingBottom: `${gap}px` }}>
      <div 
        className={`bg-gray-300 ${alignClass}`} 
        style={{ width: `${width}%`, height: `${weight}px` }} 
      />
    </div>
  );
}
