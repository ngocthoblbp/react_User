import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id: this.props.userEdit.id,
      name:this.props.userEdit.name,
      tel:this.props.userEdit.tel,
      permission:this.props.userEdit.permission,
      
    }
  }
  isChange =(event)=>{
    var name =event.target.name;
    var value =event.target.value;
   this.setState({
       [name]:value,
   })
  }
  saveClick=()=>{
    var info ={};
    info.id= this.state.id;
    info.name= this.state.name;
    info.tel= this.state.tel;
    info.permission= this.state.permission;
    this.props.getUserEditInfo(info);
    this.props.thayDoiTrangThai0();
  }
    render() {
      // console.log(this.state);
        return (
            <div>
                <div className="card text-left mt-2">
                <div className="card border-danger mb-3">
                  <div className="card-header">Sửa User</div>
                  <div className="card-body text-danger">
                    <div className="form-group">
                      <div className="form-group">
                        <input defaultValue={this.props.userEdit.name}  name="name" onChange={(event)=>this.isChange(event)} type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên" />
                      </div>
                      <div className="form-group">
                        <input defaultValue={this.props.userEdit.tel} name="tel" type="text" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Số điện thoại" />
                      </div>
                      <div className="form-group">
                        <div className="form-group">
                          <select  defaultValue={this.props.userEdit.permission} name="permission" onChange={(event)=>this.isChange(event)} className="custom-select" required>
                            <option value>Chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="btn btn-block btn-danger" onClick={()=>this.saveClick()}>Lưu</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
                
            </div>
        );
    }
}

export default EditUser;