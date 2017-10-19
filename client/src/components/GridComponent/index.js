import React, { Component } from 'react';
import {GridWrapper,LoadingIcon,LoadingWrapper} from './styles';
import loadingIcon from '../../assets/images/loading.gif'

class GridComponent extends Component {


  render() {

//    if(loading){
//        setTimeout(() => this.setState({loading:false}),3500)
//    return (<LoadingWrapper><LoadingIcon src={loadingIcon}/></LoadingWrapper>);
//    }
    return(
    <GridWrapper>
        
        <table className="table is-fullwidth is-striped">
            <thead>
                <tr>
                    {/* Shift is used here since the first element in the array will be the titles form the google sheets api */}
                { this.props.data != undefined ? this.props.data.values.shift().map((value,index) => <th key={index}>{value}</th>) : <th>Loading</th>}    
                </tr>
            </thead>
            <tbody>
                
               {this.props.data != undefined ? this.props.data.values.map((row, index) => <tr key={index}> {row.map(column => <td>{column}</td>)}</tr>) : <th>Loading</th>}
                        
            </tbody>
        </table>
    </GridWrapper>
    )
  }
}
export default GridComponent;
