import React from 'react';
import { List} from 'antd';
const data = [
  {title:'如何快速做一碗西红柿鸡蛋打卤面 $2',
   link:'./jidanmian',
  },
  {title:'我给您唱首歌吧 $10',
   link:'./sing',
  },
  {title:'聊一块钱的天 $1',
     link:'./chat',
  },
  {title:'温柔地叫我起床 $0.5/天',
       link:'./wakeup',
  },
];

export class Productlist extends React.Component {
 render() {
   return (
    <List size="large"
      bordered
      dataSource={data}
      renderItem={item => (<List.Item><List.Item.Meta
      title={<a href={item.link}>{item.title}</a>}
      /></List.Item>)}
    />
    );
 }
}