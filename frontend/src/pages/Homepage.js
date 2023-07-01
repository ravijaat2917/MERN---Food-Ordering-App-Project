import React , { useState} from "react";
import { items, burgers } from "../data/items";
import { useDispatch } from "react-redux";
import { add } from '../store/cartSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('pizza');
  
  const getCategory = () => {
    const value = document.getElementById('select1').value;
    setCategory(value);
  }

  const handleAddCart = (item) => {
    console.log(item);
    dispatch(add(item));
  }
  return (
    <>
      <div className="flex m-3 px-10 text-xl ">
        <h2>Select Category</h2>
      <select onChange={()=> getCategory()} id="select1" className='card mx-2'>
        <option value={'pizza'} >Pizza</option>
        <option value={'burger'} >Burger</option>
      </select>
      </div>

      {category === 'pizza' ? (<div className="m-5 max-w-3xl ">
        {items.map((item) => {
          return (
            <div className="card m-2 flex-col justify-center md:flex-row  md:justify-between">
              <div style={{width:'130px' , height:'130px'}}>
                <img className="w-full "  src={item.img} />
              </div>
              <div className="justify-center flex-row m-3 md:justify-between md:w-2/3" >
                <div className="wrap from-neutral-700 font-semibold">{item.name}</div>
                <div className=" font-bold py-1 ">₹ {item.price} </div>
              </div>
              <div>
                <button className=" m-3 px-4 btn btn-primary" onClick={()=>handleAddCart(item)}>Add</button>
              </div>
            </div>
          );
        })}
      </div>
      ) : 
          (
          <div className="m-5 max-w-3xl ">
        {burgers.map((item) => {
          return (
            <div  className="card m-2 flex-col justify-center md:flex-row  md:justify-between">
              <div style={{width:'130px' , height:'130px'}}>
                <img className="w-full "  src={item.img} />
              </div>
              <div className="justify-center flex-row m-3 md:justify-between md:w-2/3" >
                <div className="wrap from-neutral-700 font-semibold">{item.name}</div>
                <div className=" font-bold py-1 ">₹ {item.price} </div>
              </div>
              <div>
                <button className=" m-3 px-4 btn btn-primary" onClick={()=>handleAddCart(item)}>Add</button>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </>
  );
};

export default Homepage;
