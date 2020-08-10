import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            status: true
        }
    }
    onChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;
        if (name === 'status') {
            value = event.target.value === 'true' ? true : false;
        }

        this.setState({
            [name]: value
        });
    }
    onSubmit = () => {
        this.props.onSubmit(this.state)
        this.onClear();
        this.props.onCloseForm();
    }

    onClear = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            status: true
        })
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                    <span className="fa fa-times-circle text-right" onClick={() => this.props.onCloseForm()}></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>
                            <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;