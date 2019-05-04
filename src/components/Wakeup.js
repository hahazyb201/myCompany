import React from 'react';
import { Icon } from 'antd';
import { OrderForm } from './orderForm';
import boum from '../assets/la_boum.jpg';
export class Wakeup extends React.Component {
 render() {
   return (
     <div className="main">
          <a href="../">back</a>
          <br/>
          <br/>
          <h1>温柔地叫我起床</h1>
          <br/>
          <img src={boum} alt="asd" className="bkim"/>
          <br/><br/><br/>
          <p align="left" className="para1">
              专治早上起不来，购买此服务，准时电话叫醒，求你起床。
          </p>

          <p style={{
              fontSize: '1.3em'
          }}>
              请填写下面的表格预约此服务（只需提交一次，无需重复提交），提交后一个工作日内会有人跟您联系，谢谢。<br/>
          </p>
          <div className="odform">
              <OrderForm service="叫醒"/>
          </div>
     </div>
   );
 }
}
