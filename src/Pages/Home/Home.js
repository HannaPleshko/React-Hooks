import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ReadOutlined,
    CodeSandboxCircleFilled
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import State from '../../Components/State/State';
import Effect from '../../Components/Effect/Effect';
import About from '../../Components/About/About';
import NotFound from '../../Components/NotFound/NotFound';
import style from './style.module.css';

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState(<About />);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const changeContent = (e) => {
        switch (e?.key) {
            case '1':
                setContent(<About />)
                break
            case '2':
                setContent(<State />)
                break
            case '3':
                setContent(<Effect />)
                break
            case '4':
                setContent(<NotFound />)
                break
            case '5':
                setContent(<NotFound />)
                break
            case '6':
                setContent(<NotFound />)
                break
            case '7':
                setContent(<NotFound />)
                break

            default:
                setContent(<NotFound />)
                break
        }
    }

    return (
        <Layout className={style['wrapper']}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <ReadOutlined />,
                            label: 'About Hooks',
                        },
                        {
                            key: '2',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useState',
                        },
                        {
                            key: '3',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useEffect',
                        },
                        {
                            key: '4',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useRef',
                        },
                        {
                            key: '5',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useContext',
                        },
                        {
                            key: '6',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useCallback',
                        },
                        {
                            key: '7',
                            icon: <CodeSandboxCircleFilled />,
                            label: 'useMemo',
                        },
                    ]}
                    onClick={changeContent}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {content}
                </Content>
            </Layout>
        </Layout>
    );
};
export default Home;