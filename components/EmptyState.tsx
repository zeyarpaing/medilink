import Button from '@/components/Button';

type Props = {
  action?: {
    label: string;
    link: string;
  };
  description: string;
  title: string;
};

export default function EmptyState({ action, description, title }: Props) {
  return (
    <div className="mx-auto grid max-w-lg place-items-center rounded-xl border-2 border-dashed px-6 py-12">
      <div className="text-center">
        <p className="mb-1 text-xl font-bold">{title}</p>
        <p className="mb-3 text-foreground/70"> {description}</p>
        {action ? (
          <Button href={action.link} isLink>
            {action.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
