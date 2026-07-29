export default function Placeholder({ type, settings }: { type: string; settings: any }) {
  return (
    <div className="p-4 my-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
      <strong>Unsupported Widget:</strong> {type}
      <pre className="text-xs mt-2 bg-yellow-50 p-2 overflow-x-auto">
        {JSON.stringify(settings, null, 2)}
      </pre>
    </div>
  );
}
