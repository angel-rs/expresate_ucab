import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux';
import Constants from 'expo-constants';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as HomeActions from '../../actions/Home.actions';

import InstaFont from '../InstaFont';
import FeedPost from './FeedPost';
import { colors } from '../../config/Theme';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.flipCard = props.flipCard;
  }

  renderItem = (item) => {
    return (
      <FeedPost
        data={item}
        users={this.props.users}
        currentUser={this.props.currentUser}
      />
    )
  }

  _keyExtractor = (item, index) => `feedPost-${uuidv4()}`;

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
        <Text>No posts yet</Text>
      </View>
    )

    return (
      <Fragment>
        <View style={styles.header}>
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }} onPress={this.flipCard}>
            X
          </Text>

          <Text style={{ fontWeight: '500' }}>
            Expresate UCAB
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            // onPress={() => navigation.navigate("Photo")}
          >
            <InstaFont
              name="camera"
              size={30}
              style={{ marginRight: 10, marginBottom: 0, color: '#4d4d4d' }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.container}
          data={feed}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={this._keyExtractor}
          currentUser={this.props.currentUser}
          users={this.props.users}
        >
        </FlatList>
      </Fragment>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 75,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    elevation: 6,
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
