import { useDispatch } from "react-redux";
import { addBreadMid } from "../redux/actions/burgerAction";

function AddBurger({menu, burger}) {
  const dispatch = useDispatch();

  return (
    <thead>
      <tr>
        <th>Thức ăn</th>
        <th></th>
        <th>Đơn giá</th>
        <th>Thành tiền</th>
      </tr>
      {Object.entries(menu).map(([propsMenu, price], index) => {
        return (
          <tr key={index}>
            <td>{propsMenu}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(addBreadMid(propsMenu, 1));
                }}
                className="btn btn-success mr-3"
              >
                +
              </button>
              {burger[propsMenu]}
              <button
                onClick={() => {
                  dispatch(addBreadMid(propsMenu, -1));
                }}
                className="btn btn-danger ml-3 mr-3"
              >
                -
              </button>
            </td>
            <td>{price}</td>
            <td>{burger[propsMenu] * price}</td>
          </tr>
        );
      })}
    </thead>
  );
}
export default AddBurger;
