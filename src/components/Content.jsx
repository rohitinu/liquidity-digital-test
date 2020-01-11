import React from 'react';
import {Card, Button, Table, Icon, Typography} from 'antd';
import dataStore from '../dataStore/data'
const {Title} = Typography


export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            sortedInfo:null,
            filteredInfo:null
        }
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount() {
        let data = dataStore.getSubMenuData(this.props.menuId, this.props.subMenuId)
        this.setState({data})
    }
    handleChange(pagination, filters, sorter) {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    convertValue(value){
        return value/1000000 +'M'
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: '',
                dataIndex: 'marked',
                key: 'marked',
                width:'50px',
                render:(value) => {
                    let color=value?'#2345C7':'#cbccbe'
                    return <Icon style={{ fontSize: '16px', color: color }} theme={value?"filled":"outlined"} type="star" />}
            },
            {
                title: 'Name & Industry Type',
                dataIndex: 'title',
                key: 'title',
                render:(value,row)=>{
                    return <div><Title level={4}>{row.name}</Title>{row.category}</div>}
            },
            {
                title: 'Issuance Type',
                dataIndex: 'issuanceType',
                key: 'issuanceType',
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.issuanceType.includes(value),
                sorter: (a, b) => a.issuanceType.length - b.issuanceType.length,
                sortOrder: sortedInfo.columnKey === 'issuanceType' && sortedInfo.order,

            },
            {
                title: 'Target Raise',
                dataIndex: 'targetRaise',
                key: 'targetRaise',
                render:(value)=>{return this.convertValue(value)},
                sorter: (a, b) => a.targetRaise - b.targetRaise,
                sortOrder: sortedInfo.columnKey === 'targetRaise' && sortedInfo.order,

            },
            {
                title: 'Pre-Money Valuation',
                dataIndex: 'preMoney',
                key: 'preMoney',
                render:(value)=>{return this.convertValue(value)},
                sorter: (a, b) => a.preMoney - b.preMoney,
                sortOrder: sortedInfo.columnKey === 'preMoney' && sortedInfo.order,

            },
            {
                title: 'Amount Raised',
                dataIndex: 'amountRaised',
                key: 'amountRaised',
                render:(value)=>{return this.convertValue(value)},
                sorter: (a, b) => a.amountRaised - b.amountRaised,
                sortOrder: sortedInfo.columnKey === 'amountRaised' && sortedInfo.order,
            },
            {
                title: 'Location',
                dataIndex: 'location',
                key: 'location',
                filteredValue: filteredInfo.location || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.location.length - b.location.length,
                sortOrder: sortedInfo.columnKey === 'location' && sortedInfo.order,

            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                render:(value)=>{
                    let fileName=value==='Closed'?'green.png':'blue.jpg'
                    return <div><img style={{height:"10px",width:"10px",marginRight:'5px'}} src={fileName}/>{value}</div>}

            }
        ]
        return (
            <Card>
                <Button type="link" icon="plus" size="large"> Add Issuance</Button>
                <Button type="link" icon="align-left" size="large"> Filters</Button>
                <Table onRow={()=>{console.log("hhh")}} onRowClick={(a)=>{console.log(a)}} style={{marginTop:"20px"}} columns={columns} dataSource={this.state.data} onChange={this.handleChange}/>
            </Card>
        )
    }
}


