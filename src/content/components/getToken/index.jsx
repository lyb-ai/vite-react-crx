import Icon from './token.png'
function GetToken() {

  const getToken = () => {
    const isTrue = document.title.includes('牛');
    let token = '';
    if (isTrue) {
      const tokenArr = document.cookie?.split(';');
      const tokenIndex = tokenArr.findIndex((item) => item.includes('INIU_DATA_PRODUCT_CMS_TOKEN'));
      token = tokenArr[tokenIndex]?.split('=')[1];
    }
    const isToken = isTrue && document.cookie.indexOf('JINIU_DATA_PRODUCT_CMS_TOKEN') !== -1 && token;
    if (isTrue) {
      const textarea = document.createElement('textarea'); textarea.value = isToken;
      document.body.appendChild(textarea); textarea.select(); document.execCommand('copy'); document.body.removeChild(textarea);
    }
    if (!isTrue) {
      const token = window.prompt('请输入token');
      if (token) { window._jn._updateToken(token); }
    }
  }

  return <img src={Icon} alt="" />
}

export default GetToken
