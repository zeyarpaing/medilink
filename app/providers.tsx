'use client';
import Button from '@/components/Button';
import State from '@/components/State';
import { $modals } from '@/lib/store/modal';
import { useStore } from '@nanostores/react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const ThemeProvider = createContext({
  colorScheme: 'system',
  setColorScheme: (colorScheme: ColorScheme) => {},
});

type ColorScheme = 'dark' | 'light' | 'system';

function updateColorScheme(colorScheme: ColorScheme) {
  const html = document.querySelector('html');
  if (html) {
    html.setAttribute('class', colorScheme);
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('system');

  useEffect(() => {
    const localColorScheme = localStorage.getItem('colorScheme');

    const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const mode = (localColorScheme || 'system') as ColorScheme;
    setColorScheme(mode);
    updateColorScheme(mode === 'system' ? systemColorScheme : mode);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const systemColorScheme = e.matches ? 'dark' : 'light';
      const mode = (localColorScheme || 'system') as ColorScheme;
      setColorScheme(mode);
      updateColorScheme(mode === 'system' ? systemColorScheme : mode);
    });
  }, []);

  return (
    <ThemeProvider.Provider
      value={{
        colorScheme,
        setColorScheme: (colorScheme: ColorScheme) => {
          setColorScheme(colorScheme);
          updateColorScheme(colorScheme);
          localStorage.setItem('colorScheme', colorScheme as string);
        },
      }}
    >
      <SessionProvider>
        <NextUIProvider>
          {children}
          <Toaster
            toastOptions={{
              error: {
                className: '!border-2 !border-red-500',
              },
              style: {
                maxWidth: '31.25rem',
              },
              success: {
                className: '!border-2 !border-emerald-500',
              },
            }}
          />
          <ModalContainer />
        </NextUIProvider>
      </SessionProvider>
    </ThemeProvider.Provider>
  );
}

function ModalContainer() {
  const modals = useStore($modals);
  return (
    <>
      {Object.values(modals).map((modal, id) => {
        return (
          <Modal
            isOpen={!!modal}
            key={modal.id}
            onOpenChange={(isOpen) => {
              if (isOpen) return;
              const m = { ...$modals.get() };
              delete m[id];
              $modals.set(m);
              modal.onClose?.();
            }}
            size={modal.size ?? 'md'}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">{modal.title}</ModalHeader>
                  <ModalBody>
                    <p>{modal.content}</p>
                  </ModalBody>
                  <ModalFooter>
                    {modal.actions?.length ? (
                      (modal.actions?.map((action) => (
                        <State key={action.label} state={false}>
                          {(isLoading, setLoading) => (
                            <Button
                              color={action.color}
                              isLoading={isLoading}
                              key={action.label}
                              onPress={() => {
                                const onClick = action.onClick?.();
                                if (onClick instanceof Promise) {
                                  setLoading(true);
                                  return onClick.then(() => {
                                    setLoading(false);
                                    modal.closeOnProceed && onClose();
                                  });
                                }
                                if (action.type === 'cancel' || modal.closeOnProceed) onClose();
                              }}
                              variant={action.variant}
                            >
                              {action.label}
                            </Button>
                          )}
                        </State>
                      )) as any)
                    ) : (
                      <>
                        <Button color="danger" onPress={onClose} variant="light">
                          Cancel
                        </Button>
                        <State state={false}>
                          {(isLoading, setLoading) => (
                            <Button
                              color="primary"
                              isLoading={isLoading}
                              onPress={() => {
                                const onProceed = modal.onProceed?.();
                                if (onProceed instanceof Promise) {
                                  setLoading(true);
                                  return onProceed.then(() => {
                                    setLoading(false);
                                    modal.closeOnProceed && onClose();
                                  });
                                }
                                modal.closeOnProceed && onClose();
                              }}
                            >
                              Yes
                            </Button>
                          )}
                        </State>
                      </>
                    )}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        );
      })}
    </>
  );
}
