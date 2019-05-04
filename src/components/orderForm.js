import {
  Form, DatePicker, TimePicker, Button, Input, message
} from 'antd';
import React, { Component } from 'react';
const { MonthPicker, RangePicker } = DatePicker;


class TimeOrderForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };

      console.log('Received values of form: ', values);
      window.emailjs.send(
            'mailgun',
            'template_7m2q1og8',
            {
              senderEmail: 'Mailgun Sandbox <postmaster@sandbox3279b84f28ea4adebae986e5a14d6ec9.mailgun.org>',
              receiverEmail: 'yibing1031@gmail.com',
              date: values['date-picker'],
              time: values['time-picker'],
              name: values['Name'],
              contact: values['email'],
              service: this.props.service
            })
            .then(res => {
              message.success('Order placed successfully!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 11 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}  action="https://formspree.io/email@domain.tld" method="POST">
        <Form.Item
          label="期待服务日期"
        >
          {getFieldDecorator('date-picker', config)(
            <DatePicker name="name"/>
          )}
        </Form.Item>
        <Form.Item
          label="期待服务时间"
        >
          {getFieldDecorator('time-picker', config)(
            <TimePicker name="name"/>
          )}
        </Form.Item>
        <Form.Item
            label="姓名"
        >
           {getFieldDecorator('Name', {
               rules: [{
               required: true, message: '您希望我们如何称呼您？',
               }],
               })(
                 <Input name="name"/>
                 )
           }
        </Form.Item>
        <Form.Item
            label="邮箱/微信"
        >
          {getFieldDecorator('email', {
              rules: [{
              required: true, message: '请输入联系方式',
              }],
              })(
                <Input name="name"/>
               )
          }
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 12, offset: 11 },
          }}
        >
          <Button type="primary" htmlType="submit">提交订单</Button>
        </Form.Item>
      </Form>
    );
  }
}

export const OrderForm=Form.create()(TimeOrderForm);


