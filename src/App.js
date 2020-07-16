import React from 'react';
import CSSReset from './components/CSSReset';
import { Layout, Header, Sidebar, Main, Footer } from './components/layout';
import Logo from './components/Logo';
import Menu from './components/Menu';
import { Route, Switch, Link } from 'react-router-dom';
import Formik from './components/Formik/Formik';
import Chartkick from './components/Chartkick/Chartkick';
import Draftjs from './components/Draftjs/Draftjs';
import { navigation } from './utils';

function App() {
  return (
    <>
      <CSSReset />
      <Layout>
        <Header>
          <Link to="/">
            <Logo />
          </Link>
        </Header>

        <Sidebar>
          {navigation.map((navItem, index) => (
            <Menu
              key={index}
              title={navItem.menuTitle}
              items={navItem.menuItems}
            />
          ))}
        </Sidebar>

        <Main>
          <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            <Route path="/formik" component={Formik} />
            <Route path="/chartkick" component={Chartkick} />
            <Route path="/draftjs" component={Draftjs} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Main>

        <Footer>Ricardo Huamani Parian | showcase.drihu.com</Footer>
      </Layout>
    </>
  );
}

export default App;
