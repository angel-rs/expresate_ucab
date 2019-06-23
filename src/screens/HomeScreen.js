import React, { Component } from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as AppActions from '../actions/App.actions';

import Feed from '../components/Home/Feed';
import MapFeed from '../components/Home/MapFeed';
import Logo from '../../assets/images/expresateUcabLogo.png';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
    },
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      front: { height: "100%" },
      back: { height: 0 },
    };
    this.props.initSettings();
  }

  componentWillMount(){
    this.value = 0;
    this.animatedValue = new Animated.Value(0);
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }

  toggle = () => {
    if (this.state.front.height === "100%"){
      this.setState({ front: { height: 0 }});
      this.setState({ back: { height: "100%" }});
    } else {
      this.setState({ front: { height: "100%" }});
      this.setState({ back: { height: 0 }});
    }
  }

  flipCard = () => {
    if (this.value >= 90) {
      this.setState({ currentCard: "LIST" });
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start(this.toggle);
    } else {
      this.setState({ currentCard: "MAP" });
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start(this.toggle);
    }
  }

  render() {
    const frontAnimatedStyle = { transform: [{ rotateY: this.frontInterpolate }] };
    const backAnimatedStyle = { transform: [{ rotateY: this.backInterpolate }] };

    return (
      <View style={[styles.container, { backgroundColor: 'rgb(51, 51, 51)' }]}>

        {/* Front Card */}
        <Animated.View style={[styles.container, styles.flipCard, frontAnimatedStyle, this.state.front]}>
          <Feed flipCard={this.flipCard} />
        </Animated.View>

        {/* Back Card */}
        <Animated.View style={[styles.container, styles.flipCard, styles.flipCardBack, backAnimatedStyle, this.state.back]}>
          <MapFeed flipCard={this.flipCard} />
        </Animated.View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 85,
    height: 35,
    alignSelf: 'stretch',
  },
  flipCard: {
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    top: 0,
    width: "100%",
    position: "absolute",
  }
});


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  initSettings: () => dispatch(AppActions.initSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
