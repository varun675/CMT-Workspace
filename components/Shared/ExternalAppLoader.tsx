import React, { useState, useRef, useEffect } from 'react';
import { Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import { UserProfile } from '../../types';

interface ExternalAppLoaderProps {
  url: string;
  title: string;
  currentUser?: UserProfile;
  theme?: 'light' | 'dark';
}

export const ExternalAppLoader: React.FC<ExternalAppLoaderProps> = ({ 
  url, 
  title, 
  currentUser,
  theme = 'light'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset state when URL changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [url]);

  const handleLoad = () => {
    setIsLoading(false);
    
    // STRATEGY: PostMessage Sync
    // Once loaded, we send the current context to the child app.
    // The child app on GitHub Pages should listen for 'HOST_CONTEXT_UPDATE'.
    if (iframeRef.current?.contentWindow) {
      const message = {
        type: 'HOST_CONTEXT_UPDATE',
        payload: {
          user: currentUser,
          theme: theme,
          timestamp: new Date().toISOString()
        }
      };
      
      // We use '*' for targetOrigin here for demo purposes since we don't know your specific GitHub URLs yet.
      // In production, replace '*' with the specific origin of your child app for security.
      iframeRef.current.contentWindow.postMessage(message, '*');
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-500">
          <Loader2 size={40} className="animate-spin text-brand-600 mb-4" />
          <p className="font-medium">Connecting to External Application...</p>
          <p className="text-xs text-slate-400 mt-2">{url}</p>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-red-50 text-red-800">
          <AlertCircle size={48} className="mb-4" />
          <h3 className="text-lg font-bold">Failed to load application</h3>
          <p className="mb-6 text-center max-w-md">
            We couldn't connect to <strong>{title}</strong>. 
            This might happen if the external URL refuses to connect or is offline.
          </p>
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Open in new tab <ExternalLink size={16} />
          </a>
        </div>
      )}

      {/* The Application Container */}
      <iframe
        ref={iframeRef}
        src={url}
        title={title}
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        // Sandbox permissions are crucial for security when embedding external sites
        // allow-downloads enables file downloads within the iframe
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
        loading="lazy"
      />
      
      {/* Footer / Status Bar for the container */}
      {!isLoading && !hasError && (
        <div className="h-8 bg-slate-50 border-t border-slate-200 flex items-center justify-between px-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Connected to remote: {new URL(url).hostname}
          </span>
          <a href={url} target="_blank" rel="noreferrer" className="hover:text-brand-600 flex items-center gap-1">
            Open directly <ExternalLink size={10} />
          </a>
        </div>
      )}
    </div>
  );
};