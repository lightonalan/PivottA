# react-native-circular-progress-indicator

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![Version](https://img.shields.io/npm/v/react-native-circular-progress-indicator.svg)](https://www.npmjs.com/package/react-native-circular-progress-indicator)
[![npm](https://img.shields.io/npm/dt/react-native-circular-progress-indicator.svg)](https://www.npmjs.com/package/react-native-circular-progress-indicator)

A simple and customizable React Native circular progress indicator component. 

## Demo

![](demo.gif)
![](demo2.gif)
![](demo3.gif)
![](demo4.gif)
![](demo5.gif)

## Prerequisites

This component has a peer dependency on react-native-svg to draw the countdown circle. react-native-svg has to be installed and linked into your project.
Follow [react-native-svg](https://www.npmjs.com/package/react-native-svg#installation) to install the dependency.

## Installation

 Supported version: react-native >= 0.59.0

  ```
  npm install react-native-circular-progress-indicator
  ```
  
  or
  
  ```
  yarn add react-native-circular-progress-indicator
  ```
  
## Example
```
import CircularProgress from 'react-native-circular-progress-indicator';

....

<CircularProgress value={58} />
<CircularProgress
  value={60}
  radius={120}
  duration={2000}
  textColor={'#ecf0f1'}
  maxValue={200}
/>
<CircularProgress
  value={60}
  strokeWidth={12}
  textColor={'#ecf0f1'}
/>

```
![](demo.gif)

#### with value prefix/suffix

```
import CircularProgress from 'react-native-circular-progress-indicator';

....

<CircularProgress
  value={90}
  valuePrefix={'$'}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
/>

<CircularProgress
  value={85}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  textColor={'#fff'}
  valueSuffix={'%'}
/>

```
![](demo2.gif)

#### with callback function

```
import CircularProgress from 'react-native-circular-progress-indicator';

....

<CircularProgress
  value={90}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  textColor={'#fff'}
  valueSuffix={'%'}
  onAnimationComplete={() => { alert('callback') }}
/>

```
![](demo3.gif)

#### custom

```
import CircularProgress from 'react-native-circular-progress-indicator';

....

 <CircularProgress
  value={60}
  radius={120}
  textColor={'#ecf0f1'}
  activeStrokeColor={'#f39c12'}
  inActiveStrokeColor={'#9b59b6'}
  inActiveStrokeOpacity={0.5}
  inActiveStrokeWidth={20}
  activeStrokeWidth={40}
/>
       
<CircularProgress
  value={60}
  radius={120}
  textColor={'#ecf0f1'}
  activeStrokeColor={'#f39c12'}
  inActiveStrokeColor={'#9b59b6'}
  inActiveStrokeOpacity={0.5}
  inActiveStrokeWidth={40}
  activeStrokeWidth={20}
/>

<CircularProgress
  value={60}
  radius={120}
  inActiveStrokeOpacity={0.5}
  activeStrokeWidth={20}
  inActiveStrokeWidth={20}
  textStyle={{ fontWeight: '100', color: 'yellow' }}
/>

```

![](demo4.gif)

#### use as a countdown timer

```
import CircularProgress from 'react-native-circular-progress-indicator';

....

<CircularProgress
  value={0}
  radius={120}
  maxValue={10}
  initialValue={10}
  textColor={'#fff'}
  activeStrokeWidth={15}
  inActiveStrokeWidth={15}
  duration={10000}
  onAnimationComplete={() => alert('time out')}
/>

```

![](demo5.gif)

## Props
| Prop          | Description   | Type   | Default Value | Required |
| :-----------: |:-------------:| :-----:| :-----: | :-----: |
| value     | progress value  | Number | 0 | true |
| initialValue     | initial progress value. Helpful when used as a countdown timer  | Number | 0 | false |
| radius     | progress circle radius  | Number | 60 | false |
| activeStrokeWidth     | active progress circle stroke width  | Number | 10 | false |
| inActiveStrokeWidth     | inactive progress circle stroke width  | Number | 10 | false |
| duration     | progress animation duration  | Number | 500 | false |
| delay     | progress animation delay | Number | 0 | false |
| textColor     | progress value text color | String |  | false |
| textStyle     | progress value text style | Object | {} | false |
| maxValue     | progress maximum value. Percentage calculation is based on the maximum value provided | String | 100 | false |
| fontSize     | progress value text font size | Number |  | false |
| inActiveStrokeOpacity  | inactive progress circle opacity value | Number | 1 | false |
| strokeLinecap  | progress stroke line cap | 'round' or 'butt' or 'square' | 'round' | false |
| onAnimationComplete  | callback when animation is completed. | Function | ()=>{} | false |
| valuePrefix  | prefix value | String | '' | false |
| valueSuffix  | suffix value | String | '' | false |
| activeStrokeColor  | active progress circle color | String | '#2ecc71' | false |
| inActiveStrokeColor  | inactive progress circle color | String | 'rgba(0,0,0,0.3)' | false |
| showProgressValue  | show or hide the progress text value | Bool | true | false |

## License
This project is licenced under the MIT License.
