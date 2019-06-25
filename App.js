import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks : [],
			isDisplayForm : false
		}
	}
	//luu du lieu 
	componentWillMount(){
		if(localStorage && localStorage.getItem('tasks')){
			//JSON.parse // covenrt 1 object
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks : tasks,
			})
		}
	}
	onGenarateData = () => {
		var tasks = [
			{
				id : 0,
				name : "Hoc lap trinh PHP",
				status : true
			},
			{
				id : 1,
				name : "Hoc lap trinh JAVA",
				status : true
			},
			{
				id : 2,
				name : "Hoc lap trinh IOS",
				status : false
			},
			{
				id : 3,
				name : "Hoc lap trinh Android",
				status : true
			},
		];
		// convert String
		localStorage.setItem('tasks',JSON.stringify(tasks));
	} 
	clickToggleForm = () => {
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
		});
	}
	handSubmit = (data) => {
		var tasks = this.state.tasks;
		tasks.push(data);
		// data.id = 2;
		this.setState({
			tasks : tasks
		});
		localStorage.setItem('tasks',JSON.stringify(tasks));
	}
	render() {
		var taskson = this.state.tasks;
		var isDisplayFormW = this.state.isDisplayForm;
		var eleForm = isDisplayFormW ? <TaskForm onSubmit={ this.handSubmit} /> : '';
		return (
		<div className="container">
			<div className="text-center">
				<h1>Quản Lý Công Việc</h1>
				<hr/>
			</div>
        	<div className="row">
            	<div className={ isDisplayFormW === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
				{eleForm}
            </div>
            	<div className={ isDisplayFormW === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                <button type="button" className="btn btn-primary mr-15" onClick={ this.clickToggleForm }>
                    Thêm / Xem Công Việc
                </button>
				<button type="button"
					className="btn btn-danger"
					onClick={this.onGenarateData}>
                    Genarate Data
                </button>
                <div className="row mt-15">
                    <Control />
                </div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<TaskList taskProps = {taskson} />
                    </div>
                </div>
            </div>
        	</div>
   		</div>
		);
	}
}

export default App;
