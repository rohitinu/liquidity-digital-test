import React from 'react';
import {Typography, Tabs} from 'antd';
import dataStore from '../dataStore/data'
import Content from "./Content";


const {TabPane} = Tabs;
const {Title} = Typography

export default class Externals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subMenu: []
        }
    }

    componentDidMount() {
        let subMenu = dataStore.getSubMenu(this.props.menu.id)
        this.setState({subMenu})
    }

    render() {
        return (
            <React.Fragment>
                <Title level={2}>{this.props.menu.name}</Title>
                <Tabs>
                    {this.state.subMenu.map((cv, ir) => <TabPane tab={cv.name} key={ir}>
                        <Content menuId={this.props.menu.id} subMenuId={cv.id}/>
                    </TabPane>)}

                </Tabs>
            </React.Fragment>
        )
    }
}


