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
                        location: "Europe",
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
                        location: "Europe",
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

export function getMenu() {
    return Object.keys(data).map(cv => {
        return {
            name: data[cv].name,
            id: cv
        }
    })
}

export function getSubMenu(menuId) {
    let subData=data[menuId].type
    return Object.keys(subData).map(cv => {
        return {
            name: subData[cv].name,
            id: cv
        }
    })
}

export function getSubMenuData(menuId, subMenuId) {
    return data[menuId]["type"][subMenuId].data;
}

export default {getMenu, getSubMenu, getSubMenuData}