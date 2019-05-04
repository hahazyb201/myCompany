import React from 'react';
import { Tabs} from 'antd';

import { MyList } from './list';
import { Productlist } from './productlist';
import { Switch, Route } from 'react-router-dom'
const TabPane = Tabs.TabPane;


export class Main extends React.Component {
 render() {
   return (
     <div className="main">
       <Tabs className="main-tabs" size="large">
              <TabPane tab="关于我们" key="1" className="tab">
                   <p styles="width:60%">SparklingBing 是一个付费服务提供平台，包含生活服务、学习服务等多种付费服务。<br/>于2019年5月注册成立于<a href="https://en.wikipedia.org/wiki/Baltimore">Baltimore, Maryland, U.S.</a>。<br/> 欢迎各种形式的业务咨询，业务拓展。</p>
              </TabPane>
              <TabPane tab="产品服务" key="2" className="tab">
                  <Route exact path='/' component={Productlist} />
              </TabPane>
              <TabPane tab="博客" key="3" className="tab">
                  <Route exact path='/' component={MyList} />
              </TabPane>

       </Tabs>

     </div>

   );
 }
}