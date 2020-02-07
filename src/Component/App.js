import React,{Component} from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from "./Data.json"
const uuidv1 =require("uuid/v1")

class App extends Component {
 
      constructor(props) {
        super(props);
          
    this.state={
      trangThai:0,
      data:[],
      searchText:'',
      userEdit:{},
      userEditInfo:{}
    }
    
  }
  
  componentWillMount() {
    if (localStorage.getItem('userData') === null ){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  
  thayDoiTrangThai0=()=>{
    this.setState({
        trangThai : 0
    });
}
thayDoiTrangThai2=()=>{
  this.setState({
      trangThai : 2,
  });
}
thayDoiTrangThai1=()=>{
  this.setState({
      trangThai : 1,
  });
}
  editUser=(user)=>{
    // console.log(user)
    this.setState({
      userEdit: user
    })
  }
  getNewUser=(name,tel,permission)=>{
    var item = {};
    item.id=uuidv1();
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    var items=this.state.data;
    items.push(item);
    console.log(items);
    this.setState({
      data:items,
    })
    console.log(items);
    localStorage.setItem('userData',JSON.stringify(items));
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }
  getUserEditInfo=(info)=>{
    this.state.data.forEach((value,key) => {
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permission=info.permission;
      }  
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  
  }
  getIdDel=(id)=>{
 
    var tempData=this.state.data;

    tempData = tempData.filter(item => item.id !== id);

    this.setState({
      data:tempData,
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  
  }

  render() {
   
    var ketQuaSearch =[];
    this.state.data.forEach((element) => {
      if(element.name.indexOf(this.state.searchText)!==-1){
        ketQuaSearch.push(element);
      }  
    });
    return (
      <div>
        <Header/>
        <div className="searchFrom">
          <div className="container">
            <div className="row">
              <Search getTextSearch={(dl)=>this.getTextSearch(dl)} />
              <TableData getIdDel={(id)=>this.getIdDel(id)}   thayDoiTrangThai2={()=>this.thayDoiTrangThai2()}  data ={ketQuaSearch} editUser={(user)=>this.editUser(user)}/>
              <AddUser 
              getUserEditInfo={(info)=>this.getUserEditInfo(info)}
              userEdit={this.state.userEdit}
              trangThai={this.state.trangThai} 
              thayDoiTrangThai1={()=>this.thayDoiTrangThai1()} 
              thayDoiTrangThai0={()=>this.thayDoiTrangThai0()} 
              addNewUser={(name,tel,permission)=>this.getNewUser(name,tel,permission)}/>
            </div>
          </div>
        </div>
  
       
      </div>
    
    );
    } 
  }


export default App;
  

