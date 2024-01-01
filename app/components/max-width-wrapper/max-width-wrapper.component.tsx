import { cn } from '~/lib/utils';

type MaxWidthWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const MaxWidthWrapper = (props: MaxWidthWrapperProps) => {
  const { children, className, ...restOfProps } = props;

  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 sm:px-20',
        className,
      )}
      {...restOfProps}
    >
      {children}
    </div>
  );
};
