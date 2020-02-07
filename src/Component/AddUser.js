import React, { Component } from 'react';
import EditUser from './EditUser';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
           
          id:'',
          name:'',
          tel:'',
          permission:'',
          userEditInfo:''

    }
    }
    isChange =(event)=>{
        var name =event.target.name;
        var value =event.target.value;
       this.setState({
           [name]:value,
       })
      //  console.log(this.state.permission);
      //  var item={};
      //  item.name=this.state.name;
      //  item.id=this.state.id;
      //  item.tel=this.state.tel;
      //  item.permission=this.state.permission;
    }
    // getUserEditInfo=(info)=>{
    //   this.setState({
    //     userEditInfo:info,

    //   })
    // }
   

 
    hienThiNut = () =>{
        if(this.props.trangThai !== 0){
            return  <div className="btn btn-block btn-outline-info" onClick={()=>this.props.thayDoiTrangThai0()} >Đóng lại</div>;
            
        }else if(this.props.trangThai === 0){
            return  <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.thayDoiTrangThai1()} >Thêm mới</div>
        }
        
    }
    hienThiForm =()=>{
        if (this.props.trangThai === 1){
            return (
                <div className="card text-left mt-2">
                <div className="card border-primary mb-3">
                  <div className="card-header">Thêm User</div>
                  <div className="card-body text-primary">
                    <div className="form-group">
                      <div className="form-group">
                        <input name="name" onChange={(event)=>this.isChange(event)} type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên" />
                      </div>
                      <div className="form-group">
                        <input name="tel" type="text" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Số điện thoại" />
                      </div>
                      <div className="form-group">
                        <div className="form-group">
                          <select name="permission" onChange={(event)=>this.isChange(event)} className="custom-select" required>
                            <option value>Chọn quyền</option>
                            <option value="1">Admin</option>
                            <option value="2">Modrator</option>
                            <option value="3">Normal</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="btn btn-block btn-primary" onClick={(name,tel,permission)=>this.props.addNewUser(this.state.name,this.state.tel,this.state.permission)}>Thêm mới</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
            else if(this.props.trangThai === 2){
              return (
                <EditUser thayDoiTrangThai0={()=>this.props.thayDoiTrangThai0()}
                 getUserEditInfo={(info)=>this.props.getUserEditInfo(info)}  
                 userEdit={this.props.userEdit}/>
              )
            
              
        
    }
  }
    
    render() {
     
      
    
        return (
            <div className="col-3">
           {this.hienThiNut()}
           {this.hienThiForm()}
          </div>
        );
    }
}

export default AddUser;