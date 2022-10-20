import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';


interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href:'/'},
  { name: 'My Balance', icon: FiTrendingUp, href:'/balance' },
  { name: 'My Nfts', icon: FiCompass, href:'/nft' },
  { name: 'Watchlist', icon: FiStar, href:'#' },
  { name: 'Settings', icon: FiSettings, href:'#' },
]

export default LinkItems;