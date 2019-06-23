import React, { Component, Fragment } from 'react';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import * as HomeActions from '../../actions/Home.actions';

import FeedPost from './FeedPost';
import { colors } from '../../config/Theme';

class MapFeed extends Component {
  constructor(props) {
    super(props);
    this.flipCard = props.flipCard;
  }

  render() {
    const { loading, feed } = this.props;

    if (loading) return (
      <View style={styles.containerFull}>
        <ActivityIndicator
          size="large"
          color={colors.tintColor}
        />
      </View>
    )

    if (feed === null || feed.length === 0) return (
      <View style={styles.containerFull}>
        <Text>
          No posts yet
        </Text>
      </View>
    )

    return (
      <Fragment>
        <View style={styles.header}>
          <Text onPress={this.flipCard}>
            flip
          </Text>
        </View>
        <MapView />
      </Fragment>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 75,
    paddingTop: Constants.statusBarHeight,
  },
  containerFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});


const mapStateToProps = (state) => ({
  feed: state.feed.data,
  users: state.users.data,
  loading: state.app.loading,
  currentUser: state.profile.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapFeed);
