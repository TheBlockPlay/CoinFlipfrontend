import {
  ComponentProps,
  FC,
  startTransition,
  useCallback,
  useState,
} from 'react';
import { Spinner } from './spinner';
import { Button } from './ui/button';

type Props = Omit<ComponentProps<typeof Button>, 'onClick'> & {
  onClick?: () => Promise<boolean>;
};

export const LoadingButton: FC<Props> = ({ onClick, disabled, ...rest }) => {
  const [loading, setLoading] = useState(false);

  const loadingClick = useCallback(async () => {
    setLoading(true);
    if (onClick) {
      startTransition(() => {
        onClick().then((v) => setLoading(v)).catch((e) => {
            console.log(e);
          }).finally(() => {  setLoading(false);  });
      });
    }
  }, [onClick]);

  return (
    <Button 
      onClick={loadingClick} {...rest} disabled={loading || disabled}>
      {loading ? <Spinner /> : rest.children}
    </Button>
  );
};
