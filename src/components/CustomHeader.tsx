import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FilterIcon, MenuIcon, SearchIcon } from "./Icons";

export default function CustomHeader({ icons, title, navigation }: any) {
  return (
    <View style={styles.header}>
      <View style={styles.Left}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {icons ? (
        <View style={styles.Right}>
          <TouchableOpacity>
            <SearchIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Filter}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 28,
    paddingBottom: 15,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    borderBottomColor: "#0A254032",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: "SourceSansPro-SemiBold",
    marginLeft: 10,
    fontSize: 18,
    color: "#103B66",
  },
  Left: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  Filter: {
    marginLeft: 14,
  },
});
