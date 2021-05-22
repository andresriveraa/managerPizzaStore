import React from 'react'
import { connect } from 'react-redux';
import {
  GetAllIngredients,
  IngredientsInPizza,
  ConfirmPizza,
} from "../containers/";
import {
  SiderLayout,
  Statiscit
} from ".";
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import GlobalStyle from '../GlobalStyles'
import './App.css';
const { Header, Content, Footer, Sider } = Layout

const App = ({modal}) => {
  return (
    <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalStyle/>
        <SiderLayout />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path="/" component>
                <>
                  <GetAllIngredients />
                  <IngredientsInPizza />
                  {
                    modal && (
                      <ConfirmPizza />
                    )
                  } 
                </>
              </Route>
              <Route exact path="/statistic">
                <Statiscit />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by <a href="https://andresrivera.com.co" target="_blank">Andrésrivera.com.co</a></Footer>
        </Layout>
    </Layout>
    </Router>
  );
}

const mapStateToProps = state => ({
  modal: state.pizza.modal
})

export default connect(mapStateToProps, null)(App) 
