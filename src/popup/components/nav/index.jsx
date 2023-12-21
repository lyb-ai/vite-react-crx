import { useNavigate } from 'react-router-dom';
import { Button, Tabs } from 'antd';
import './nav.styl';

function Nav(props) {

  const { location } = props;

  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      key: '/home',
    },
    {
      label: 'User',
      key: '/user',
    }
  ]
  return (
    <div className='C-nav'>
      <Tabs
        centered
        activeKey={location.pathname}
        onChange={(key) => {
          navigate(key);
        }}
        items={items}
      />
      <Button
        className='btn-exit'
        onClick={() => navigate('/login')}
        type='primary'
      >
        EXIT
      </Button>
    </div>
  )
}

export default Nav

