import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
    render() {
        var taskItem =this.props.taskProps;
       
        var elementTask = taskItem.map((taskItem,index) => {
            return  <TaskItem key={taskItem.id}  itemProp={taskItem} numIndex={index}/>
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
               { elementTask }
                </tbody>
            </table>
		);
    }
}

export default TaskList;
