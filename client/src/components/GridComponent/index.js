import React, { Component } from 'react';
import {GridWrapper} from './styles';

class GridComponent extends Component {
renderTableData = () => {
    if(this.props.data != undefined){
    const dataWithoutTitles = this.props.data.values
    dataWithoutTitles.map(column => {
        column.map(row => {
            return<td>row</td> 
        } )
    }
    )
    }
}
  render() {

   
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
                
               {this.props.data != undefined ? this.props.data.values.map(row => <tr> {row.map(column => <td>{column}</td>)}</tr>) : <th>Loading</th>}
                        
            </tbody>
        </table>
    </GridWrapper>
    )
  }
}
export default GridComponent;
