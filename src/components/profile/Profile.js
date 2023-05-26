import { useState, useEffect } from 'react';
import './Profile.css'

const MEALY_URL_GET_MEALS = "https://keffrey-mealy-server.onrender.com/meal/get"

function Profile() {

    const [meals, setMeals] = useState([])

    const getMeals = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.data)
            })
    }

    useEffect(() => {
        getMeals(MEALY_URL_GET_MEALS)

    }, [meals])

    return ( 
        <div>
            <div className='menu-container'>
                <h2 className='menu-day'>MENU FOR THE DAY</h2>
                {meals.map((meal, index) => {
                    return (
                        <Menu name={meal.name} url={meal.url} price={meal.price} qty={meal.qty} key={'profile_'+index} />
                    );
                })}
            </div>
        </div>
    );
}

function Menu({name, url, price, qty}) {
    return (
        <div className='menu'>
            <h3 className='menu-name' >{name}</h3>
            <img className='menu-image' src={url} alt='no img found' />
            
            <h3 className='menu-qty' > Quantity - {qty}</h3>
            <button className='menu-price' >{price}</button>
        </div>
    );

}



export default Profile;