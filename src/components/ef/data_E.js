var dataE = {
    name: '流程E，力导图',
    nodeList: [
        {
            id: 'nodeA',
            name: '流程A-节点A',
            type: 'task',
            left: '26px',
            top: '161px',
            ico: 'el-icon-user-solid'
        },
        {
            id: 'nodeB',
            name: '流程A-节点B',
            type: 'task',
            left: '340px',
            top: '161px',
            ico: 'el-icon-goods'
        },
        {
            id: 'nodeC',
            name: '流程A-节点C',
            type: 'task',
            left: '739px',
            top: '161px',
            ico: 'el-icon-present'
        }, {
            id: 'nodeD',
            name: '流程D-节点D',
            type: 'task',
            ico: 'el-icon-present',
            state: 'running'
        }, {
            id: 'nodeE',
            name: '流程D-节点C',
            type: 'task',
            ico: 'el-icon-present',
            state: 'warning'
        }, {
            id: 'nodeF',
            name: '流程D-节点D',
            type: 'task',
            ico: 'el-icon-present',
            state: 'running'
        }
    ],
    lineList: [{
        from: 'nodeA',
        to: 'nodeB'
    }, {
        from: 'nodeA',
        to: 'nodeC',
        label: 'hello'
    }, {
        from: 'nodeB',
        to: 'nodeD'
    }, {
        from: 'nodeC',
        to: 'nodeD'
    }, {
        from: 'nodeC',
        to: 'nodeC'
    }, {
        from: 'nodeD',
        to: 'nodeE'
    }, {
        from: 'nodeB',
        to: 'nodeF'
    }
    ]
}

export function getDataE() {
    return dataE
}
