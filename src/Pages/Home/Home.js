import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ReadOutlined,
    CodeSandboxCircleFilled
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import ContentSide from '../../Components/ContentSide/ContentSide';
import style from './style.module.scss';

const { Header, Sider, Content } = Layout;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState(<ContentSide eventKey={"1"} />);
    
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
        {
            key: '8',
            icon: <ReadOutlined />,
            label: 'Заключение',
        },
    ];

    const changeContent = (e) => {
        setContent(<ContentSide eventKey={e?.key} />);
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
