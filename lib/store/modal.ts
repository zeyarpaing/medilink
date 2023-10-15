import { ButtonProps, ModalProps } from '@nextui-org/react';
import { deepMap } from 'nanostores';
import { ReactNode } from 'react';

export type Modal = {
  actions?: [
    {
      color: ButtonProps['color'];
      label: string;
      onClick: () => Promise<void> | void;
      type: 'cancel';
      variant: ButtonProps['variant'];
    },
    {
      color: ButtonProps['color'];
      label: string;
      onClick: () => Promise<void> | void;
      type: 'proceed';
      variant: ButtonProps['variant'];
    }
  ];
  closeOnProceed?: boolean;
  content: ReactNode | string;
  id: string;
  onClose?: () => void;
  onProceed?: () => Promise<void> | void;
  size?: ModalProps['size'];
  title: ReactNode | string;
};

export const $modals = deepMap<Record<number, Modal>>({
  ...[],
});
