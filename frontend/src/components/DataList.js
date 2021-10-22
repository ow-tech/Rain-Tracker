import React,{ useEffect, useState} from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import Chart from './Chart';

const { Header, Content, Footer } = Layout;

const DataList = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
  

    useEffect(() => {
        setLoading(true)
        fetch('http://127.0.0.1:8000/api/home/')
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            setData(data)
            setLoading(false) 
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
        // let mylist = ['ann', 'luo', 'kamba', 'liz', 'alex', 'ken']
      
    },[])
  


    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div style = {{float:'left',width: '120px',
  height: '31px', margin: '16px 24px 16px 0',backgroundColor:'rgba(255, 255, 255, 0.2)'}}className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            
          {loading? <div>Loading...</div> : (
              
                <div style={{ }}>
                    <Chart
                    loading = {loading}
                    data={data}
                    />
                </div>)
        }    
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Rain Tracker ©2021 Created By Upande</Footer>
      </Layout>
    )
}


export default DataList
