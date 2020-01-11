import React from 'react';
import {Layout, Menu, Icon, Avatar, Dropdown} from 'antd';
import Externals from "../components/External";

const { Header, Content, Footer, Sider } = Layout;

export default class AppLayout extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render() {

        return(
            <Layout>
                <Sider
                    theme="light"
                    breakpoint="md"
                    collapsedWidth="0"
                    style={{height:"100vh"}}
                >
                    <div style={{height:"120px", padding:"20px"}} className="logo" >
                        <Avatar shape="square" size={64} src="Blue.png"/>
                    </div>
                    <Menu style={{height:"100%"}} mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span className="nav-text">Deal Room</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span className="nav-text">Broker Dealer Registry</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span className="nav-text">Insurance Statistics</span>
                        </Menu.Item>
                        <Menu.Divider/>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{background: '#FAFAFB'}}><UserControl  user={this.props.user}/></Header>
                    <Content style={{ margin: '0'}}>
                        <div style={{ padding: 24,height: "100vh" , background: '#FAFAFB'}}><Externals/></div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


const UserControl=(props) =>{
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">{props.user.email}</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">Settings</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Sign Out</Menu.Item>
        </Menu>
    );
    return(
        <Dropdown overlay={menu} trigger={['click']}>
            <a  style={{float:"right"}} className="ant-dropdown-link" href="#">
                {props.user.name} <Icon type="down" />
            </a>
        </Dropdown>
    )
}