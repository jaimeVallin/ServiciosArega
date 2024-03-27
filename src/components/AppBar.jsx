import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link, useLocation } from "react-router-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBar = () => {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <NavbarTabs isLoggedIn={isLoggedIn} pathname={pathname} />
      </ScrollView>
    </View>
  );
};

const NavbarTab = ({ children, to, iconName, active, isLoggedIn }) => {
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} component={Pressable}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name={iconName}
          size={20}
          color={
            isLoggedIn
              ? active
                ? theme.appBar.textPrimary
                : theme.appBar.textSecondary
              : theme.appBar.textTertiary
          }
          style={{ marginRight: 5 }}
        />
        <StyledText fontWeight="bold" style={textStyles}>
          {children}
        </StyledText>
      </View>
    </Link>
  );
};

const NavbarTabs = ({ isLoggedIn, pathname }) => {
  return (
    <>
     

      {!isLoggedIn && (
        <Link to="/signin" component={Pressable}>
          <NavbarTab
            iconName="user-plus"
            active={pathname === "/signin"}
            isLoggedIn={isLoggedIn}
          >
            Sign In
          </NavbarTab>
        </Link>
      )}
      <Link to="/nuevaOrden" component={Pressable}>
        <NavbarTab
          iconName="plus"
          active={pathname === "/nuevaOrden"}
          isLoggedIn={isLoggedIn}
        >
          Crear Orden
        </NavbarTab>
      </Link>
    </>
  );
};

export default AppBar;
