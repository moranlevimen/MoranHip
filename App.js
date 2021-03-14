import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://api-staging.ridehip.com/api/v1/payments/2c1c5b98f8c04988b5bb43b508856c2f/history?page=1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.records});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1,paddingTop: 250, backgroundColor:'#f9c2ff',  padding: 20,
      marginVertical: 8,
      marginHorizontal: 16, }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <Text>
            {item.brand},
            {item.transaction_time},
            {item.payment_id},
            {item.description}
            {item.payment_id}
            </Text>

              )}
          />
        )}
      </View>
    );
  }
}