import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "케라비" },
    { nickname: "쇽쇼쇽" },
    { nickname: "고버드 오피셜" },
  ];
  const followingList = [
    { nickname: "케라비" },
    { nickname: "쇽쇼쇽" },
    { nickname: "고버드 오피셜" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | GoBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
