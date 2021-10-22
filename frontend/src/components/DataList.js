import React,{ useEffect, useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Chart from './Chart';
import AntdForm from './AntdForm';

// modal imports
import { Modal, Button } from 'antd';


// end

const { Header, Content, Footer } = Layout;

const DataList = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    // modal constants
    const [isModalVisible, setIsModalVisible] = useState(false);
    // end
  // formvalues state

  const [formData, setFormData]=useState()
  const [week, setWeek] = useState()
  const [day, setDay] = useState('')
  const [rainData, setRainData] = useState()


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

    // useEffect((formData)=>{
     
     

      
    // }, [])

    // endpoint for posting into the backend

      

    // formvaulues
//  function downStreamValues (values){
//    setFormData(values)1
//    console.log(formData)
//  }
    

    // modal functionality
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
// useEffect((formData) =>{
//   if (formData){
//     postBackend(formData)

//   }
  
// })
//   const postBackend = (formData)=>{
//     console.log('am notseeen')
//     console.log(formData)
//     if(formData){
//       console.log('I am formdata in datalist')
//       console.log(formData)
//       setWeek(formData.week)
//       setDay(formData.day)
//       setRainData(formData.rainData)
//     console.log('am extratctecd'+ week)
//     fetch('http://127.0.0.1:8000/api/post/', {
//         method:'post',
//         cache: 'no-cache',
//         headers: {
//             'Content-Type': 'application/json'
//     },
    

//         body: JSON.stringify({
//           week: week,
//           day: day,
//           rainData: rainData
//         })
//     }).then(function(res){
//         return res.json();
//     })
//     .catch(error =>{
//         setError(error)
//     });

//     }
    
  
// }

    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div style = {{float:'left',width: '120px',
  height: '31px', margin: '16px 24px 16px 0',backgroundColor:'rgba(255, 255, 255, 0.2)'}}className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Chart</Menu.Item>
            <Menu.Item key="3" onClick={showModal}>Prediction</Menu.Item>
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
            {/* <Button type="primary" onClick={showModal}>
              Open Modal
            </Button> */}
            <Modal title="Data InPut" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <AntdForm upStreamValues={(values)=>setFormData(values)} />
            </Modal>
          </>
      </Layout>
    )
}


export default DataList
