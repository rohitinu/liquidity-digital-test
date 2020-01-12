const data = {
    dealRoom: {
        name: "Deal Room",
        type: {
            "externalInsu": {
                name: "External Issuances",
                data: [
                    {
                        id: "iss001",
                        name: "Energy Infrastructure",
                        category: "Financial Service",
                        issuanceType: "Equity",
                        targetRaise: 23000000,
                        preMoney: 1000000,
                        amountRaised: 1000000,
                        location: "Europe",
                        status: "In Progress",
                        marked: false
                    }, {
                        id: "iss002",
                        name: "ABC",
                        category: "Financial Service",
                        issuanceType: "Investment Fund",
                        targetRaise: 23000000,
                        preMoney: 1000000,
                        amountRaised: 1000000,
                        location: "U.S",
                        status: "In Progress",
                        marked: true
                    }, {
                        id: "iss003",
                        name: "Alternative Gas Extraction",
                        category: "Space",
                        issuanceType: "Debit",
                        targetRaise: 23000000,
                        preMoney: 1000000,
                        amountRaised: 1000000,
                        location: "U.S",
                        status: "Closed",
                        marked: true
                    }]
            },
            favIssuances: {
                name: "Favorite Issuances",
                data: []
            },
            myIssuances: {
                name: "My Issuances",
                data: []
            },
            mndaManagement: {
                name: "MNDA Management",
                data: []
            }
        }
    },
    brokerDeal: {
        name: "Broker-Dealer Registry",
        type: {}
    },
    issuance: {
        name: "Issuance Statistics",
        type: {}
    }
}
const dealData = {
    id: "iss003",
    name: "Alternative Gas Extraction",
    category: "Space",
    issuanceType: "Debit",
    targetRaise: 23000000,
    preMoney: 1000000,
    amountRaised: 1000000,
    valuation: 85000000,
    status: "Closed",
    desc: "As such, Energy Infrastructure naturally includes the traditional utilities associated with energy transport and management (coal transport trains, natural gas pipelines, electric transmission lines, etc.).",
    requiredData: {
        doc: 'May 24,2019',
        coi: 'U.S',
        industry: 'Renewable Resource',
        tis: 100000000,
        freeFloat: 100000,
        pps: 100,
        abs: 1000000,
        ccs: 100000,
        dds: 90000,
        acs: 7000
    },
    commonDocs: [{fileName: 'Marketing Dec.docx', url: ''}, {fileName: 'Presentation.pptx', url: ''}],
    confidentialDocs: [{fileName: 'Presentation Dec.docx', url: ''}, {fileName: 'Issuance.xls', url: ''}],
    sourceParty: {name: "Rahul", email: 'rahul.yadav@gmail.com'},
    issuer: {name: "Rohit", email: 'sharmarohit.inu@gmail.com'}

}

export function getMenu() {
    return Object.keys(data).map(cv => {
        return {
            name: data[cv].name,
            id: cv
        }
    })
}

export function getSubMenu(menuId) {
    let subData = data[menuId].type
    return Object.keys(subData).map(cv => {
        return {
            name: subData[cv].name,
            id: cv
        }
    })
}

export function convertValue(value) {
    return '$' + value / 1000000 + 'M'
}

export function getDealData() {
    return dealData
}

export function getSubMenuData(menuId, subMenuId) {
    return data[menuId]["type"][subMenuId].data;
}

export default {getMenu, getSubMenu, getSubMenuData, convertValue, getDealData}