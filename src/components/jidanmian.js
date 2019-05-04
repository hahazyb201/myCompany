import React from 'react';
import { Icon, Form, DatePicker, TimePicker, Button } from 'antd';
import { OrderForm } from './orderForm';
import answer from '../assets/1988.jpg';
const { MonthPicker, RangePicker } = DatePicker;

export class Jidanmian extends React.Component {
 render() {
   return (

     <div className="main">
          <a href="../">back</a><br/><br/>
          <h1>如何快速做一碗西红柿鸡蛋打卤面</h1>
                    <br/><br/><br/>
          <img src={answer} alt="asd" className="bkim"/>
          <br/>
          <br/>
          <br/>
          <br/>

          <p align="left" className="para1">
              <Icon type="pushpin" />准备两个西红柿，洗净切丁，加入少许盐，浸出汤汁<br/><br/>
              <Icon type="pushpin" />准备两个鸡蛋，加入少许盐，打散备用<br/><br/>
              <Icon type="pushpin" />鸡蛋要摊成饼，切块儿<br/><br/>
              <Icon type="pushpin" />加油炒西红柿，溢出汤汁后加入酱油<br/><br/>
              <Icon type="pushpin" />倒入开水，再放鸡蛋，白糖，胡椒粉，盐<br/><br/>
              <Icon type="pushpin" />煮5分钟后，加入淀粉勾芡<br/><br/>
              <Icon type="pushpin" />出锅倒入煮好的面条，加入葱花和生蒜<br/>
          </p>
          <p style={{
                    	fontSize: '1.3em'
                    }}>
          以上为步骤概述，如果需要详细的视频通话指导，请填写下面的表格预约服务（只需提交一次，无需重复提交），<br/>提交后一个工作日内会有人跟您联系，谢谢。<br/><br/><br/><br/>
          </p>
          <div className="odform">
              <OrderForm service="鸡蛋面"/>
          </div>


     </div>


   );
 }
}

