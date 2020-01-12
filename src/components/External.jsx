import React from 'react';
import {Typography, Tabs, Card} from 'antd';
import dataStore from '../dataStore/data'
import TableContent from "./TableContent";


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
                {(this.props.menu.id==='dealRoom')?(<Tabs>
                    {this.state.subMenu.map((cv, ir) => <TabPane tab={cv.name} key={ir}>
                        <TableContent menuId={this.props.menu.id} subMenuId={cv.id}/>
                    </TabPane>)}
                </Tabs>):(<Card><Title level={2}>Not Defined</Title></Card>)}

            </React.Fragment>
        )
    }
}


