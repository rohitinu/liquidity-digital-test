import React from 'react';
import {Button, Card, Col, Divider, Drawer, Row, Tabs} from 'antd';
import dataStore from '../dataStore/data'
import Title from "antd/es/typography/Title";
import Icon from "antd/es/icon";

const {TabPane} = Tabs;

export default class DealInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subMenu: []
        }
    }

    componentDidMount() {
    }

    render() {
        let {data} = this.props;
        let fileName = data.status === 'Closed' ? 'green.png' : 'blue.jpg';
        return (
            <Drawer
                placement="right"
                closable={false}
                onClose={this.props.onClose}
                visible={this.props.visible}
                width="550px"
            >
                <Row><Col span={20}/><Col span={4}><Button type="default" icon="close" onClick={this.props.onClose} size="small">Close</Button></Col></Row>
                <Tabs size="large">
                    <TabPane style={{background: '#FAFAFB'}} forceRender={true} tab="Deal Info" key={1}>
                        <Row>
                            <Col span={6}>Target Raise</Col>
                            <Col span={6}>Amount Raised</Col>
                            <Col span={6}>Valuation</Col>
                            <Col span={6}>Status</Col>
                        </Row>
                        <Row style={{color: "#000", fontWeight: "800"}}>
                            <Col span={6}>{dataStore.convertValue(data.targetRaise)}</Col>
                            <Col span={6}>{dataStore.convertValue(data.amountRaised)}</Col>
                            <Col span={6}>{dataStore.convertValue(data.valuation)}</Col>
                            <Col span={6}>{<div><img style={{height: "10px", width: "10px", marginRight: '5px'}}
                                                     src={fileName}/>{data.status}</div>}</Col>
                        </Row>
                        <Card style={{marginTop: "10px", padding: '5px'}}>
                            <Title level={4}>Description</Title>
                            {data.desc}
                        </Card>
                        <Card style={{marginTop: "10px", padding: '5px'}}>
                            <Title level={4}>Required</Title>
                            <div style={{overflowY: 'scroll', height: '250px'}}>
                                <table style={{width: '100%'}} className={'special_row'}>
                                    <tbody style={{padding: '10px'}} className={"ant-table-tbody"}>
                                    <tr>
                                        <td>Date of Creation</td>
                                        <td>{data.requiredData.doc}</td>
                                    </tr>
                                    <tr>
                                        <td>Country of issuance</td>
                                        <td>{data.requiredData.coi}</td>
                                    </tr>
                                    <tr>
                                        <td>Industry</td>
                                        <td>{data.requiredData.industry}</td>
                                    </tr>
                                    <tr>
                                        <td>Total issued Share</td>
                                        <td>{data.requiredData.tis}</td>
                                    </tr>
                                    <tr>
                                        <td>Free Float</td>
                                        <td>{data.requiredData.freeFloat}</td>
                                    </tr>
                                    <tr>
                                        <td>Price per Share</td>
                                        <td>{data.requiredData.pps}</td>
                                    </tr>
                                    <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                        <Title style={{marginTop: '10px'}} level={4}>Common Documents</Title>
                        {data.commonDocs.map(cv => <Row><Col span={18}>{cv.fileName}</Col><Col span={6}><Button
                            type="link" icon="download" size="small" href='https://calibre-ebook.com/downloads/demos/demo.docx'> Download</Button></Col></Row>
                        )}
                        <Title style={{marginTop: '10px'}} level={4}>Confidential Documents</Title>
                        {data.confidentialDocs.map(cv => <Row><Col span={18}>{cv.fileName}</Col><Col span={6}><Button
                            type="link" icon="download" size="small" href='https://calibre-ebook.com/downloads/demos/demo.docx'> Download</Button></Col></Row>
                        )}
                        <Title style={{marginTop: '10px'}} level={4}>Source Party</Title>
                        <Row style={{color: '#000', fontWeight: '600px'}}>{data.sourceParty.name}</Row>
                        <Row>{data.sourceParty.email}</Row>
                        <Title style={{marginTop: '10px'}} level={4}>Issuer</Title>
                        <Row style={{color: '#000', fontWeight: '600px'}}>{data.issuer.name}</Row>
                        <Row>{data.issuer.email}</Row>
                        <Divider/>
                        <Button type="link" icon="edit" size="large"> Edit Issuance</Button>
                    </TabPane>
                    <TabPane forceRender={true} tab="Additional Info" key={2}>
                        No Data
                    </TabPane>
                </Tabs>
            </Drawer>
        )
    }
}


