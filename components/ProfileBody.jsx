import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

const ProfileBody = ({
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setDropdownVisible(true);
    } else {
      setIsFollowing(true);
    }
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setDropdownVisible(false);
  };

  const handleSendMessage = () => {
    alert("Send message");
    setDropdownVisible(false);
  };

  const handleBlock = () => {
    alert("Block");
    setDropdownVisible(false);
  };

  return (
    <View>
      {accountName && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {accountName}
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{following}</Text>
          <Text>Following</Text>
        </View>
        <View>
          <Button
            title={isFollowing ? "Following" : "Follow"}
            onPress={handleFollowToggle}
            color={isFollowing ? "#ccc" : "#3493D9"}
          />
        </View>
      </View>
      {isDropdownVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isDropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={styles.dropdown}>
              <Text style={styles.dropdownItem} onPress={handleSendMessage}>
                Send message
              </Text>
              <Text style={styles.dropdownItem} onPress={handleUnfollow}>
                Unfollow
              </Text>
              <Text style={styles.dropdownItem} onPress={handleBlock}>
                Block
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
    textAlign: "center",
  },
});
