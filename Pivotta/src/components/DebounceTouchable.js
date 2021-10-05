// import React from 'react';
// import { TouchableOpacity, TouchableHighlight } from 'react-native';
// import { colors, defaultStyles } from 'src/utils/themes';

// export default class DebounceTouchable extends React.PureComponent {
//   static defaultProps = {
//     debounceTime: 300, // Get user feedback, 500ms is a good starting point.
//     activeOpacity: 0.8
//   };

//   state = {
//     isDebouncing: false,
//     backgroundColor: this.props.stateColor ? this.props.stateColor : ''
//   };

//   componentWillUnmount() {
//     clearTimeout(this.timer);
//   }

//   debouncingTouch = () => {

//     clearTimeout(this.timer);
//     if (!this._isDebouncing) {
//       this._isDebouncing = true;
//       this.props.onPress && this.props.onPress();
//     }
//     this.timer = setTimeout(() => {
//       this._isDebouncing = false;
//     }, this.props.debounceTime);
//   };

//   onPressIn = () => {
//     this.setState({ backgroundColor: colors.press })
//   }

//   onPressOut = () => {
//     if (this.props.stateColor) {
//       this.setState({ backgroundColor: this.props.stateColor })
//     }

//   }

//   render() {
//     return (
//       <TouchableOpacity
//         style={[this.props.style, this.props.style && { backgroundColor: this.props.style.backgroundColor === colors.primary100 || this.props.style.backgroundColor === colors.white ? this.state.backgroundColor : this.props.style.backgroundColor }]}
//         // activeOpacity={this.props.activeOpacity ? this.props.activeOpacity : 1}
//         disabled={this.props.disabled}
//         onPress={this.debouncingTouch}
//         delayLongPress={this.props.delayLongPress}
//         onLongPress={this.props.onLongPress}
//         // underlayColor={colors.primary100}
//         onPressIn={this.onPressIn}
//         onPressOut={this.onPressOut}
//         activeOpacity={this.props.activeOpacity?this.props.activeOpacity:1}
//       >
//         {this.props.children}
//       </TouchableOpacity>
//     );
//   }
// }
