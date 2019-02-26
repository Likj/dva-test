import React from 'react';
import { Route, BrowserRouter, Switch, Link, } from 'react-router-dom';
import dynamic from 'dva/dynamic';

const Home = dynamic({
  component: () => import('../pages/home/index'),
});
const List = dynamic({
    component: () => import('../pages/list/index'),
  });

const Nav = function() {
    return(
        <div>
           <Link to = '/home'>首页</Link>
            <Link to = '/list'>list</Link>      
        </div>    
    );
}



export default class RouterPage extends React.Component{
    render () {
        return (
            <div>
                <BrowserRouter>
                    <Switch >
                        <Route exact  path='/' render = { () => <Nav/> }  />
                        <Route exact  path='/home' render = { () => <Home/> }  />
                        <Route exact  path='/list' render = { () => <List/> }  />
                    </Switch> 
                </BrowserRouter>
            </div>    
            
        );
    }
}