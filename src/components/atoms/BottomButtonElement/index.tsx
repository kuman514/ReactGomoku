import React, { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

import { palette } from '^/theme';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

function BottomButtonElement({ children, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="solid"
      colorScheme="gray"
      style={{
        marginLeft: '0.25vw',
        marginRight: '0.25vw',
        cursor: 'pointer',
        color: palette.dark,
      }}
      _hover={{
        backgroundColor: palette.mainTheme,
      }}
    >
      {children}
    </Button>
  );
}

export default BottomButtonElement;
