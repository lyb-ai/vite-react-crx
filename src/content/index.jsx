import ReactDOM from "react-dom/client"
import { useState } from 'react'
import './content.styl'
import GetToken from './components/getToken'
import OpenVSCode from './components/openVSCode';
import SelectCMS from './components/selectCMS';
import ButtonImage from './images/content-icon.png';

const toolList = [
  {
    name: 'OpenVSCode',
    element: <OpenVSCode />
  },
  {
    name: 'GetToken',
    element: <GetToken />
  },
  {
    name: 'SelectCMS',
    element: <SelectCMS />
  }
]

function Content() {
  const [isHover, setIsHover] = useState(false)

  const hoverMenuStyle = (idx) => {
    let style = {
      transition: 'transform .5s',
      transform: `rotate(${idx * 360 / toolList.length}deg) translateX(50px)`,
      transitionDelay: `${idx * 0.1}s`,
    }
    if (!isHover) {
      style = {
        ...style,
        transform: `rotate(${-idx * 360 / toolList.length}deg) translateX(0px)`,
      }
    }
    return style
  }

  return (
    <div className="CRX-content" onClick={() => setIsHover(!isHover)}>
      <div
        className="content-entry"
      >
        <img src={ButtonImage} alt="" />
        {
          toolList.map((t, idx) => {
            return (
              <div
                key={t.name}
                className="tool"
                style={hoverMenuStyle(idx)}
              >
                <div
                  style={{ transform: `rotate(${-(idx) * 360 / toolList.length}deg)` }}
                  className="tool-img-box"
                >
                  {t.element}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)
//TODO shadowdom
const crxContainer = ReactDOM.createRoot(document.getElementById('CRX-container'))

crxContainer.render(<Content />)
