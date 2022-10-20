import React, {FC, ReactNode } from 'react';
import {
  Box,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerContent
} from '@chakra-ui/react';
import { SidebarContent, MobileNav} from 'components/elements/navigation';
 
import Head from 'next/head';


 const SidebarWithHeader: FC<{ children: ReactNode, pageName: string }> = ({ children, pageName }) => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return(
  <>
    <Head>
      <title>{`${pageName} | Coin Tracker`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
    </>
)};

export default SidebarWithHeader;

