export default function Icon({ settings }: { settings: any }) {
  const iconValue = settings.selected_icon?.value || '';
  const align = settings.align || 'center';
  const size = settings.size?.size || 50;

  let alignClass = 'justify-center';
  if (align === 'left') alignClass = 'justify-start';
  if (align === 'right') alignClass = 'justify-end';

  if (!iconValue) return null;

  return (
    <div className={`flex mb-4 ${alignClass}`}>
      <i className={`${iconValue} text-blue-500`} style={{ fontSize: `${size}px` }}></i>
    </div>
  );
}
