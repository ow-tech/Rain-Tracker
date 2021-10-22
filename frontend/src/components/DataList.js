import React,{ useEffect, useState} from 'react'
import { Layout, Menu, Breadcrumb, Modal } from 'antd';
import Chart from './Chart';
import AntdForm from './AntdForm';


const { Header, Content, Footer } = Layout;

const DataList = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
// force rerender
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
    // modal constants
    const [isModalVisible, setIsModalVisible] = useState(false);
    // end
  // formvalues state

  const [formData, setFormData]=useState()
  // 


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
        
      
    },[])
    

    // modal functionality
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
      forceUpdate();
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
      forceUpdate();
    };
 

    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div style = {{float:'left',width: '120px',
  height: '31px', margin: '16px 24px 16px 0',backgroundColor:'rgba(255, 255, 255, 0.2)'}}className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Chart</Menu.Item>
            <Menu.Item key="3" onClick={showModal}>Update</Menu.Item>
            <Menu.Item key="4">Analytics</Menu.Item>
            <Menu.Item key="5">Subscribe</Menu.Item>
            <Menu.Item key="1">Login</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item >App</Breadcrumb.Item>
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

        {/* modal jsx */}
          <>
           
            <Modal title="Data InPut" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <AntdForm  upStreamValues = {values =>setFormData(values)} forceUpdate={forceUpdate}/>
            </Modal>
          </>
      </Layout>
    )
}


export default DataList
