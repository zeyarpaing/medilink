import { useEffect } from 'react';

export function Listener({ onTrigger }: { onTrigger: () => void }) {
  useEffect(() => {
    function hendle(e: any) {
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        onTrigger();
      }
    }
    document.addEventListener('keydown', hendle, false);
    return () => {
      document.removeEventListener('keydown', hendle, false);
    };
  });
  return null;
}
