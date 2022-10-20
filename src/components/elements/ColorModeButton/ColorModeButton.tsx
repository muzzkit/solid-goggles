import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
import { Button, useColorMode} from '@chakra-ui/react';

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   

<Button
aria-label="Toggle Color Mode"
onClick={toggleColorMode}
_focus={{ boxShadow: 'none' }}
w="fit-content"
mt="100"
p="4"
mx="8"
>
{colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
</Button>
  );
};

export default ColorModeButton;
