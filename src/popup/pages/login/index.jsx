import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import Logo from './logo.png';
import './login.styl'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="P-login">
      <img src={Logo} alt="logo" className='logo' />
      <div className='ipt'>
        <Input placeholder="请输入用户名" />
      </div>
      <div className='ipt'>
        <Input placeholder="请输入密码" />
      </div>
      <div className='ipt'>
        <Button className='ipt' type="primary" onClick={() => navigate('/home')}>登录</Button>
      </div>
    </div>
  );
}

export default Login
