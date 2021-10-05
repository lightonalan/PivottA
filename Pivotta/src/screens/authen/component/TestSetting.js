import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import Picker from './Picker';
import AppConfig from 'src/common/config/AppConfig';
import API from 'src/common/network/API';
import DynamicServerManager, {
  SERVER_DATA,
} from 'src/common/data/DynamicServerManager';
import _ from 'lodash';
const widthScreen = Dimensions.get('window').width - 32;

const Container = styled.View`
backgroundColor: #fff 
width: ${widthScreen}
borderRadius: 26
paddingVertical: 4
        paddingHorizontal: 20
        marginTop:12
`;
const RowContainer = styled.View`
  flexDirection: row
  justifyContent: space-between
  alignItems: center
`;

const RightContainer = styled.View`
  flex: 3;
`;

const LeftContainer = styled.View`
  flex: 2.5;
`;

const Label = styled.Text`
  color: #004fac;
`;

const Input = styled.TextInput`
  fontSize: 12
  fontWeight: 200
  padding: 0
  backgroundColor: #fff
`;

const dataServer = [
  AppConfig.DEV_SERVER,
  AppConfig.TEST_SERVER,
  AppConfig.PRO_SERVER,
  AppConfig.CUSTOMIZE_SERVER,
];

const dataProtocol = [AppConfig.PROTOCOL_UNSECURITY, AppConfig.PROTOCOL];

class TestSetting extends Component {
  onChangeServer(server) {
    const serverSelected = _.filter(SERVER_DATA, serverData => {
      return serverData.server === server;
    });
    const dynamicServerOld = DynamicServerManager.getDynamicServer();
    const dynamicServer = {
      ...dynamicServerOld,
      ...serverSelected[0],
    };
    this.onDoneServerConfig(dynamicServer);
    // eslint-disable-next-line react/no-string-refs
    this.refs.server.closeAddModal();
  }

  onChangeProtocol(protocol) {
    const dynamicServer = {
      ...DynamicServerManager.getDynamicServer(),
      protocol,
    };
    this.onDoneServerConfig(dynamicServer);
    // eslint-disable-next-line react/no-string-refs
    this.refs.protocol.closeAddModal();
  }

  onChangeHost = _.debounce(host => {
    const dynamicServer = {
      ...DynamicServerManager.getDynamicServer(),
      host,
    };
    this.onDoneServerConfig(dynamicServer);
  }, 500);

  onDoneServerConfig(dynamicServer) {
    DynamicServerManager.saveDynamicServer(dynamicServer).then(res => {
      API.switchServer();
      this.setState({...this.state});
    });
  }

  render() {
    const dynamicServer = DynamicServerManager.getDynamicServer();
    return (
      <Container>
        <RowContainer>
          <LeftContainer>
            <Label>Server:</Label>
          </LeftContainer>
          <RightContainer>
            <Picker
              // eslint-disable-next-line react/no-string-refs
              ref={'server'}
              onPress={item => this.onChangeServer(item)}
              data={dataServer}
              itemSelected={dynamicServer.server}
            />
          </RightContainer>
        </RowContainer>
        {dynamicServer.server === 'Customization' && (
          <RowContainer>
            <LeftContainer>
              <Label>Server Hostname:</Label>
            </LeftContainer>
            <RightContainer>
              <Input
                defaultValue={dynamicServer.host}
                onChangeText={text => this.onChangeHost(text)}
              />
            </RightContainer>
          </RowContainer>
        )}
        <RowContainer>
          <LeftContainer>
            <Label>Protocol:</Label>
          </LeftContainer>
          <RightContainer>
            <Picker
              // eslint-disable-next-line react/no-string-refs
              ref={'protocol'}
              onPress={item => this.onChangeProtocol(item)}
              data={dataProtocol}
              itemSelected={dynamicServer.protocol}
            />
          </RightContainer>
        </RowContainer>
      </Container>
    );
  }
}
export default connect(state => ({}), {})(TestSetting);
