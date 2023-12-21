import ReactDOM from 'react-dom/client'
import Popup from '@/popup';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import '@/common/styles/frame.styl';

import '@/content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <Popup />
  </ConfigProvider>
)
