import React from 'react'
import "../style";
import {useSelector} from 'react-redux'
import AddBurger from './AddBurger';

 function Burger() {
     const {burger,menu,total} = useSelector((state) => state.burgerReduce);
    return (
        <div className="container">
        <h3 className="display-4 text-success">Bài Tập Burger Cybersoft</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh Burger Của Bạn</h3>
            <div className="breadTop"></div>
            {Object.entries(burger).map(([propsBurger,value],index) => {
            let breadMid = [];  
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>);
              }
              return breadMid;
        })} 
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Chọn Thức Ăn</h3>
            <table className="table">
              
                <AddBurger menu={menu} burger={burger}/>
              
              <tfoot>
                <tr>
                <td colSpan="2"></td>
                <td>Tổng tiền</td>
                <td>{total}</td>
                </tr>
                
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
}


export default Burger