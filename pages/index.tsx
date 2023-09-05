import SidebarWithHeader from 'components/layouts/Default/SidebarWithHeader';

import { Home } from 'components/templates/home';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <SidebarWithHeader pageName="Home">
      <Home />
    </SidebarWithHeader> 
  );
}; 

export default HomePage;
