import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Root } from "native-base";
import TabIcon from "../../partials/tab-icon";
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from "../../screens/Home";
import Demo from "../../screens/Demo";

class Routes extends Component {
  state = {
    loaded: true,
  };
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Root>
          <Router>
            <Stack key={"root"}>
              <Scene
                key={"Menu"}
                tabs={true}
                showLabel={false}
                initial={true}
                hideNavBar
              >
                <Scene
                  key={"Home"}
                  icon={TabIcon}
                  name={"home"}
                  type={"FontAwesome"}
                  component={Home}
                ></Scene>
                <Scene
                  key={"Demo"}
                  icon={TabIcon}
                  name={"user"}
                  type={"FontAwesome"}
                  component={Demo}
                ></Scene>
              </Scene>
            </Stack>
          </Router>
        </Root>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopColor: "rgba(0,0,0,0.09)",
    borderTopWidth: 1,
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
