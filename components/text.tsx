import { cva, VariantProps } from 'class-variance-authority';

const textStyles = cva('', {
  variants: {
    intent: {
      success:
        'bg-green-200 p-1 text-center rounded text-green-700 select-none',
      reset: 'bg-gray-200 p-1 text-center rounded text-gray-700 select-none"',
      edit: 'bg-yellow-200 p-1 text-center rounded text-yellow-700 select-none"',
      danger: 'bg-rose-200 p-1 text-center rounded text-rose-700 select-none',
    },
    isUpperCase: {
      first: 'first-letter:uppercase',
      all: 'uppercase',
    },
    isFlex: {
      start: 'flex justify-start items-center',
      center: 'flex justify-center items-center',
      end: 'flex justify-end items-center',
    },
    isBlock: {
      true: 'block',
      false: 'inline-block',
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
    },
  },
});

export interface Props extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
}

const Text = ({
  gap,
  isBlock,
  children,
  intent,
  isUpperCase,
  isFlex,
  ...props
}: Props) => {
  return (
    <div
      className={textStyles({ gap, isBlock, intent, isUpperCase, isFlex })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Text;
