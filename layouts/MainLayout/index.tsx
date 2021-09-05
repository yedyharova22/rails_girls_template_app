import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";

interface MainLayoutProps {
  children?: React.ReactElement;
}

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link passHref href="/">
              Experience
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link passHref href="/wallpapers">
              Free wallpapers
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link passHref href="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

MainLayout.defaultProps = {
  children: undefined,
};

export default MainLayout;
