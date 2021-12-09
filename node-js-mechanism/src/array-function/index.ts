const orders = [
    { orderType: `enterprise`, orderAmount: 400, commissionRate: 0.2 },
    { orderType: `individual`, orderAmount: 50, commissionRate: 0.1 },
    { orderType: `individual`, orderAmount: 20, commissionRate: 0.1 },
    { orderType: `enterprise`, orderAmount: 600, commissionRate: 0.2 },
    { orderType: `individual`, orderAmount: 30, commissionRate: 0.1 },
]

export function mapSample() {
    // calculate the commission for each order
    const result = orders.map((item: any) => {
        return item.orderAmount * item.commissionRate
    })
    console.log(result)
}

export function filterSample() {
    // filter the enterprise orders
    const result = orders.filter((item: any) => {
        return item.orderType == `enterprise`
    })
    console.log(result)
}

export function reduceSample() {
    // calculate the total commission for each order type
    const result = orders.reduce((accumulator: any, item: any) => {
        if (accumulator[item.orderType]) {
            accumulator[item.orderType] += item.orderAmount * item.commissionRate
        } else {
            accumulator[item.orderType] = item.orderAmount * item.commissionRate
        }
        return accumulator
    }, {})
    console.log(result)
}

export function combineSample() {
    // calculate the total commission for enterprise order
    const result = orders.filter((item: any) => {
        return item.orderType == `enterprise`
    }).map((item: any) => {
        return item.orderAmount * item.commissionRate
    }).reduce((sum: any, commission: number) => {
        return sum += commission
    }, 0)
    console.log(result)
}