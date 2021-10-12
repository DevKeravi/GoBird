import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
const Global = createGlobalStyle`
	.ant-row {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}
	.ant-col:first-child {
		padding-left: 0 !important;
	}

	.ant-col::last-child {
		padding-right: 0 !important;
	}
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <div>
        <Global />
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>고 버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <SearchInput enterButton />
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {me ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a
              href="http://github.com/DevKeravi"
              target="_blank"
              rel="noreferrer noopener"
            >
              Made By Keravi
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
