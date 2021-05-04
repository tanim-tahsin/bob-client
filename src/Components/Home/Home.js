import React from 'react';
import './Home.css'
import logo from '../../../src/image/logo.jpg';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import MenuTabs from '../MenuTabs/MenuTabs';
const Home = () => {
    const style = {
        textDecoration:'none',
        color:'white'
    }
    return (
        <div className="text-center">
            <img style={{width:'10%'}} className="img-fluid logo mt-4" src={logo} alt=""/>
            <h3>স্বাধীনতা ব্যাচ</h3>
            <h5 className="text-secondary">Instructor: Sadiqur Rahman Sadab😎</h5> 


            <button  className="btn btn-primary">
             <a style={style} href="https://www.facebook.com/groups/369128194157044" target="_blank" rel="noopener noreferrer">
             <GroupAddIcon/> Facebook Group
                </a>
             </button>
             <button  className="btn btn-danger ms-3">
             <a style={style} href="https://www.facebook.com/groups/369128194157044/user/100003494706331" target="_blank" rel="noopener noreferrer">
             <PermContactCalendarIcon/> facebook Id
                </a>
             </button>
             <MenuTabs/>
        </div>
    );
};

export default Home;