import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Layout} from "antd";
import CustomHeader from './components/CustomHeader/CustomHeader';
import User from './components/user';
import Data from './components/data';
import Notfound from "./components/notfound";
import Home from './pages/Home/Home'
import Faq from './pages/FAQ/Faq';
import Breathing from "./pages/Breathing/Breathing";
import Falls from "./pages/Falls/Falls";
import PubNub from './components/pubnub';
import Dashboard from './pages/DashBoard/Dashboard';
import DevicePanel from "./components/PanelComponent/DevicePanel";
import S3Content from "./components/PanelComponent/File";

const {Header,Content,} = Layout;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header>
                        <CustomHeader/>
                    </Header>
                    <Content>
                        <Switch>
                            <Route exact path="/healthDevicesDetection/" component={Home}/> 
                            <Route path="/healthDevicesDetection/users" component={User}/>
                            <Route path="/healthDevicesDetection/data" component={Data}/>
                            <Route path="/healthDevicesDetection/faq" component={Faq}/>
                            <Route path="/healthDevicesDetection/breathing" component={Breathing}/>
                            <Route path="/healthDevicesDetection/Falls" component={Falls}/>
                            <Route path="/healthDevicesDetection/pubnub" component={PubNub}/>
                            <Route path="/healthDevicesDetection/dashboard" component={Dashboard}/>
                            <Route path="/healthDevicesDetection/demo" component={Data}/>
                            <Route component={Notfound}/>
                        </Switch>
                    </Content>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
