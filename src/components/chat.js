import React from 'react';
import { Icon } from 'antd';
import ct from '../assets/chat.jpg';
import { OrderForm } from './orderForm';
export class Chat extends React.Component {
 render() {
   return (
     <div className="main">
          <a href="../">back</a>
          <br/>
          <br/>
          <h1>聊一块钱的天</h1>
          <br/>
          <img src={ct} alt="asd" className="bkim"/>
          <br/>
          <p style={{
              fontSize: '1.3em'
              }}>
              请填写下面的表格预约此服务（只需提交一次，无需重复提交），提交后一个工作日内会有人跟您联系，谢谢。<br/><br/><br/><br/>
          </p>

          <div className="odform">
              <OrderForm service="聊天"/>
          </div>
     </div>
   );
 }
}
