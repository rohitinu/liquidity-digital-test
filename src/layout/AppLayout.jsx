import React from 'react';
import {Layout, Menu, Icon, Avatar, Dropdown} from 'antd';
import Externals from "../components/External";
import dataStore from '../dataStore/data';

const {Header, Content, Footer, Sider} = Layout;

export default class AppLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [],
            selectedKey: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        let menu = dataStore.getMenu()
        this.setState({menu})
    }

    handleChange(e) {
        this.setState({selectedKey: e.key})
    }

    render() {
        return (
            <Layout>
                <Sider
                    theme="light"
                    breakpoint="md"
                    width="270px"
                    collapsedWidth="0"
                    style={{height: "100vh",position:"fixed"}}
                >
                    <div className="logo liq-logo">
                        <Avatar shape="square" size={64} src="liquidity.png"/>
                    </div>
                    <Menu style={{height: "100%"}}  mode="inline" onClick={this.handleChange}
                          defaultSelectedKeys={['0']}>
                        {this.state.menu.map((cv, ir) => <Menu.Item key={ir}>
                            <span className="nav-text">{cv.name}</span>
                        </Menu.Item>)}
                    </Menu>
                    <Footer className='app-footer'>Contact us if you have question: <a href='support@liquidity.digital'>support@liquidity.digital</a></Footer>
                </Sider>
                <Layout>
                    <Header style={{background: '#FAFAFB'}}><UserControl user={this.props.user}/></Header>
                    <Content style={{margin: '0'}}>
                        {(this.state.menu.length > 0)?(<div className='app-content'><Externals menu={this.state.menu[this.state.selectedKey]}/></div>):(null)}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


const UserControl = (props) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">Profile</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">Settings</a>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3">Sign Out</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link user-info" href="#">
                {props.user.name} <Icon type="down"/>
            </a>
        </Dropdown>
    )
}