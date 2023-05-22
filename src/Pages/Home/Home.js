import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ReadOutlined,
    CodeSandboxCircleFilled
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import State from '../../Components/State/State';
import Effect from '../../Components/Effect/Effect';
import About from '../../Components/About/About';
import NotFound from '../../Components/NotFound/NotFound';
import style from './style.module.scss';

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState(<About />);
    const items = [
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
    ];

    const changeContent = (e) => {
        switch (e?.key) {
            case '1':
                setContent(<About />);
                break;
            case '2':
                setContent(<State />);
                break;
            case '3':
                setContent(<Effect />);
                break;
            case '4':
                setContent(<NotFound />);
                break;
            case '5':
                setContent(<NotFound />);
                break;
            case '6':
                setContent(<NotFound />);
                break;
            case '7':
                setContent(<NotFound />);
                break;
            default:
                setContent(<NotFound />);
                break;
        }
    };

    return (
        <Layout className={style['wrapper']}>
            <Sider collapsed={collapsed}>
                {<div className={style[!collapsed ? 'demo-logo' : 'hidd-logo']} />}
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    onClick={changeContent}
                />
            </Sider>
            <Layout>
                <Header className={style['header']}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </Header>
                <Content className={style['content']}>
                    {content}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
