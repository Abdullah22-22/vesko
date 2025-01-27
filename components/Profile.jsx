import React, { useState } from "react";
import ProfileBody from "./ProfileBody";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.gradientBackground}
    >
      {children}
    </LinearGradient>
  );
};

const Profile = () => {
  const profileImage = require("../assets/profile.jpg");

  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState("");

  const handleFollowToggle = () => {
    setFollowers(isFollowing ? followers - 1 : followers + 1);
    setIsFollowing(!isFollowing);
  };

  const profileData = {
    accountName: "abdullahaltameemi",
    profileImage,
    post: 10,
    followers: 10,
    following: 10,
  };

  return (
    <View style={styles.container}>
      <GradientBackground>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ProfileBody
            {...profileData}
            isFollowing={isFollowing}
            onFollowToggle={handleFollowToggle}
          />
        </ScrollView>
      </GradientBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default Profile;
