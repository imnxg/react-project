import { Layout,Button } from "@arco-design/web-react";
import Lunbo from "./dv/lunbo";
import Comments from "./dv/comment";
import Fengqing from "./dv/fengqing";
// Compare this snippet from src\index.js:
// import React from 'react';
// import ReactDOM from 'react-dom';

const { Header, Content, Footer } = Layout;

export default function WebTest() {
    return (
        <Layout>
        <Header>Header</Header>
        <Content>Content
        <Button type="primary">Hello Arco</Button>
        <Button type="secondary">Cancel</Button>
        <Lunbo/>
        <Comments/>
        <Fengqing/>
        </Content>
        <Footer>Footer</Footer>
        
        </Layout>
        
    );
    }
