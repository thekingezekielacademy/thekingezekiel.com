export default function TextEditor({ settings }: { settings: any }) {
  const content = settings.editor || '';
  return (
    <div 
      className="prose max-w-none text-gray-600 mb-6" 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}
