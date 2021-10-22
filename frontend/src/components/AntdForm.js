import React,{ useEffect, useState} from 'react'
import { Form, Input, Button, Select} from 'antd';

const AntdForm = (params) => {

  const [formValues, setFormValues] = useState()
  const [error,setError] = useState(null)
  

  const onFinish = (values) => {
    // console.log('Success:', values);
    setFormValues(values)
    params.upStreamValues(values)
    postBackend(values)
    params.forceUpdate()
  };
  console.log(formValues)

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;

  // post rain data to endpoint

  const postBackend = (formValues)=>{
    if(formValues){
      console.log('I am formdata in datalist')
      console.log(formValues.week)
      let week = formValues.week;
      let day = formValues.day;
      let rainData = formValues.rainData;
      // setDay(formValues.day)
      // setRainData(formValues.rainData)
      console.log('am extratctecd'+ formValues.week)
      fetch('http://127.0.0.1:8000/api/post/', {
          method:'post',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/json'
      },
    

        body: JSON.stringify({
          week: week,
          day: day,
          rainData: rainData
        })
    }).then(function(res){
        return res.json();
    })
    .catch(error =>{
        setError(error)
    });

    }
    
  
}
  return (
    <Form
      name="basic"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 16,
      }}
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Week e.g 4"
        name="week"
        rules={[
          {
            required: true,
            message: 'Please input week No.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Day"
        name="day"
        rules={[
          {
            required: true,
            message: 'Please Select A day',
          },
        ]}
      >
        <Select style={{ width: 70 }}>
        <Option value="1">Sun</Option>
        <Option value="2">Mon</Option>
        <Option value="3">Tue</Option>
        <Option value="4">Wed</Option>
        <Option value="5">Thur</Option>
        <Option value="6">Fri</Option>
        <Option value="7">Sat</Option>
      </Select>
      </Form.Item>

      <Form.Item
        name="rainData"
        label="Rain Measurement in mm"
        rules={[
          {
            required: true,
            message: 'Please Input amount',
          },
        ]}
      >
        <Input/>
       
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntdForm;