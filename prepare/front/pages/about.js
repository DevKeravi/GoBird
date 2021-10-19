import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { Card } from "antd";

const About = () => {
  return <div>추후에 제공될 예정입니다.</div>;

  /*
	return (
		<>
      <AppLayout>
        <Head>
          <title>케라비 | GoBird</title>
        </Head>
        {userInfo ? (
          <Card
            actions={[
              <div key="twit">
                트윗
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로윙 <br />
                {userInfo.Followings}
              </div>,
              <div key="followers">
                팔로워 <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="고버드 매니아"
            />
          </Card>
        ) : null}
      </AppLayout>
    </>
  );
  */
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {}
);

export default About;
