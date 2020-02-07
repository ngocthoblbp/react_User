import React, { Component } from 'react';

class TableDatRow extends Component {
    showPermission =()=>{
        if(this.props.permission == 1){
            return 'Admin';
        }else if(this.props.permission == 2){
            return 'Moderator';
        }else{
            return 'Normal User';
        }
    }
    userClick=()=>{
        this.props.editUser();
        this.props.thayDoiTrangThai2()
    }

    render() {
        // console.log(this.props.trangThai);
        return (
          
                <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.showPermission()}
                    </td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Button group">
                        <div className="btn btn-warning sua" onClick={()=>this.userClick()}><i className="fa fa-edit" /></div>
                        <div className="btn btn-danger xoa" onClick={(id)=>this.props.getIdDel(this.props.id)}><i className="fas fa-user-times" /></div>
                        </div>
                    </td>
                </tr>
                
        );
    }
}

export default TableDatRow;