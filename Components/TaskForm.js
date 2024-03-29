import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            status : false
        }
    }
    handChange = (event) => {
        this.setState({
            name : event.target.value
        });
    }
    handSubmit = (event) => {        
        event.preventDefault();
        this.props.onSubmit(this.state);
    }   
	render() {
		return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                <form onSubmit={(e) => this.handSubmit(e) }>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={(e) => this.handChange(e) } />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" value={this.state.status} onChange={(e) => this.handChange(e) }>
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
            </div>
		);
	}
}

export default TaskForm;
