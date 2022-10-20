import React, {FC} from 'react';
import {Box, Flex, useColorModeValue, Text, CloseButton, BoxProps } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import LinkItems from './paths';

import {ColorModeButton} from 'components/elements/ColorModeButton'


interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent: FC<SidebarProps> = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Coin Tracker
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
 
          <NavItem key={link.name} icon={link.icon} href={link.href}>
        
            {link.name}
          </NavItem>
       
      ))}

      <ColorModeButton />
    </Box>
  );
};

export default SidebarContent;
