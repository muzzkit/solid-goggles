
import React, {FC} from 'react';
import {
  Text,
  IconButton,

  Flex,
  HStack,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
} from 'react-icons/fi';
import { ConnectButton } from 'components/modules/ConnectButton';
interface MobileProps extends FlexProps {
    onOpen: () => void;
  }

  const MobileNav: FC<MobileProps>= ({onOpen, ...rest}) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          CoinTR
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />

          <Flex alignItems={'center'}>
            <ConnectButton />
          </Flex>
        </HStack>
      </Flex>
    );
  };

  export default MobileNav;