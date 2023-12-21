import { useLocation, Outlet } from 'react-router-dom';

import Nav from '@/popup/components/nav';
import './entry.styl'
function Entry() {
  const location = useLocation();
  return (
    <div className='P-entry'>
      <Nav location={location} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Entry
