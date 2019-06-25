import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        var   taskItemVal = this.props.itemProp;
        var   taskItemIndex = this.props.numIndex;
        // console.log(taskItemVal);
        // console.log(taskItemIndex);
        return (
            <tr>
                <td>{taskItemIndex + 1}</td>
                <td>{taskItemVal.name}</td>
                <td className="text-center">
                    <span className={ taskItemVal.status === true ? 'label label-success' : 'label label-danger' }>
                               {taskItemVal.status === true ? 'Kich hoat' : 'Ẩn'}
                            </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
            </tr> 
		);
    }
}

export default TaskItem;
