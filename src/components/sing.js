import React from 'react';
import { Icon } from 'antd';
import { OrderForm } from './orderForm';
import freestyle from '../assets/wyf.jpg';
export class Sing extends React.Component {
 render() {
   return (
     <div className="main">
          <a href="../">back</a><br/><br/>
          <h1>我给您唱首歌吧</h1>
                    <br/><br/>
          <img src={freestyle} alt="asd" className="bkim"/>

          <br/><br/>

          <p align="center" className="para4">
              卖艺啦！
          </p>

          <br/>
          <p style={{
               fontSize: '1.3em'
           }}>
               请填写下面的表格预约此服务（只需提交一次，无需重复提交），提交后一个工作日内会有人跟您联系，谢谢。<br/><br/><br/><br/>
           </p>
          <div className="odform">
               <OrderForm service="唱歌"/>
          </div>
     </div>
   );
 }
}
