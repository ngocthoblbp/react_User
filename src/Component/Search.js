import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue :"",
        }
    }
    
    isChange =(event)=>{
       this.setState({
           tempValue:event.target.value,
       }

       )
    //    this.props.getTextSearch(this.state.tempValue);
    }

    render() {
        return (
            <div className="col-12">
            <div className="form-group">
              <div className="btn-group" role="group" aria-label="Button group">
                <input style={{width: '500px'}} type="text" className="form-control" onChange={(event)=>this.isChange(event)}  aria-describedby="helpId" placeholder="Nhập từ khóa..." />
                <div className="btn btn-info" onClick={(dl)=>this.props.getTextSearch(this.state.tempValue)}>Tìm</div>
              </div>
            </div>
            <hr/>
          </div>
        );
    }
}

export default Search;