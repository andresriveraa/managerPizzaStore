import './App.css';
import {
  GetAllIngredients,
  IngredientsInPizza,
  ConfirmPizza,
} from "../containers/";
import {
  Navbar,
  SiderLayout
} from ".";
import GlobalStyle from '../GlobalStyles'
import { connect } from 'react-redux';
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout

const App = ({modal}) => {
  return (
    // <div className="App">
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalStyle/>
      <SiderLayout />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <GetAllIngredients />
          <IngredientsInPizza />
          {
            modal && (
              <ConfirmPizza />
            )
          } 
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    // </div>
  );
}

            // <Breadcrumb style={{ margin: '16px 0' }}>
            //   <Breadcrumb.Item>User</Breadcrumb.Item>
            //   <Breadcrumb.Item>Bill</Breadcrumb.Item>
            // </Breadcrumb>
            // <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            //   Bill is a cat.
            // </div>

const mapStateToProps = state => ({
  modal: state.pizza.modal
})

export default connect(mapStateToProps, null)(App) 
