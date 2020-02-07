import React, { Component } from 'react';
import TableDatRow from './TableDatRow';

class TableData extends Component {
    mappingDataUser=()=>this.props.data.map((value,key)=>(
        <TableDatRow getIdDel={(id)=>this.props.getIdDel(id)} thayDoiTrangThai2={()=>this.props.thayDoiTrangThai2()} editUser={(user)=>this.props.editUser(value)}  key={key} id={value.id} stt={key} name={value.name} tel={value.tel} permission={value.permission}/>
    ))
    render() {
    
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Sđt</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                        
                    
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;