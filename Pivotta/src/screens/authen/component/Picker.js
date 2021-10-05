import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'react-native-elements';
import styled from 'styled-components/native';

const ListItem = styled.TouchableOpacity`
  margin-top: 8
  margin-bottom: 8
  border-bottom-width: 0.5
  borderColor: #ddd
`;
const LabelItem = styled.Text`
  font-size: 16
  fontWeight: 500
`;
const Container = styled.View`
backgroundColor: #FFFFFF
borderRadius: 6
paddingVertical: 16
paddingHorizontal: 16
marginTop: 16
height: 400
width: 320
`;
class Picker extends Component {
  state = {
    isVisible: false,
    data: this.props.data,
    itemSelected: null,
  };
  showAddModal() {
    this.setState({
      isVisible: true,
    });
  }
  closeAddModal() {
    this.setState({
      isVisible: false,
    });
  }
  listRowRender = ({item}) => (
    <ListItem onPress={() => this.props.onPress(item)}>
      <LabelItem>{item}</LabelItem>
    </ListItem>
  );
  keyExtractor = item => item;
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({isVisible: true})}>
          <LabelItem>{this.props.itemSelected || 'Vui lòng chọn'}</LabelItem>
        </TouchableOpacity>
        <Modal
          // eslint-disable-next-line react/no-string-refs
          ref={'addOrder1'}
          isVisible={this.state.isVisible}>
          <Container>
            <FlatList
              data={this.props.data}
              renderItem={this.listRowRender}
              keyExtractor={this.keyExtractor}
            />
            <Button
              title="Cancel"
              onPress={() => this.setState({isVisible: false})}
            />
          </Container>
        </Modal>
      </View>
    );
  }
}

export default Picker;
