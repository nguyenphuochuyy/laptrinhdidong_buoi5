// In App.js in a new project
import * as React from 'react';

import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import blue from "./assets/vs_blue.png"
import star from "./assets/star.png"
import black from "./assets/vs_black.png"
import silver from "./assets/vs_silver.png"
import red from "./assets/vs_red.png"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 4 }} >
        <Image source={blue} style={{width : "100%" , height : '100%' ,}}></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
          </View>
          <View>
            <Text>(Xem 828 đánh giá )</Text>
          </View>

        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>1.790.00đ</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 400, textDecorationLine: 'line-through' }}>1.790.00đ</Text>

        </View>
      </View>
      <View>
        <Text style={{ color: 'red', fontSize: 12, fontWeight: 600 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('Color') }} style ={{width : 332 , height: 40 , backgroundColor : '#C4C4C4' , justifyContent : 'space-evenly' , alignItems : 'center',borderRadius : 10,flexDirection:'row'}}>
        <Text>4 màu - chọn màu  </Text>
        <Text>{">"}</Text>
      </TouchableOpacity>
      <Button title='CHỌN MUA'></Button>
    </View>
  );
}
function ColorDetail({route , navigate} ){
  const {color} = route.params;
  const [text , setText] = React.useState('')
  const [imgcolor , setImgColor] = React.useState('blue')
 
  React.useEffect(()=>{
     if(color == 'black'){
    setImgColor('./assets/vs_black.png')
    setText('Đen')
  }

  else if(color == 'red'){
    setImgColor('./assets/vs_red.png')
    setText('Đỏ')
  }
  else if(color == 'blue'){
    setImgColor('b./assets/vs_blue.pnglue')
    setText('Xanh')
  }
  else
  setImgColor('./assets/vs_silver.png')
  setText('Bạc')
  },[color])
  return (
    <>
      <View style={{flex: 1 }}>
        <View style={{flex : 1 ,flexDirection  :'row'}}>
          <View style={{width : 100 , height : 100}}>
            {
             
            }
            <Image style={{width : '100%' , height:'100%'}} resizeMode='contain' source={silver}></Image>
          </View>
          <View>
            <Text style={{fontSize : 18 , fontWeight : 500}}>Điện thoại Vsmart Joy3</Text>
            <Text style={{fontSize : 18 , fontWeight : 500}}>Hàng chính hãng</Text>
            <Text>Màu : {text}</Text>
          </View>
        </View>
       <View style={{paddingVertical : 20 , paddingHorizontal : 20 ,flex:5 , backgroundColor : '#C4C4C4'}}>
          <Text>Chọn 1 màu bên dưới</Text>
          <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#C5F1FB' , marginBottom : 10 }} onPress={()=>{ setColor('silver') }  } >

            </TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#F30D0D' , marginBottom : 10}} onPress={()=>{ setColor('red')}} ></TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#000000' , marginBottom : 10}} onPress={()=>{ setColor('black')}}></TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#234896' , marginBottom : 10}}onPress={()=>{ setColor('blue')}} ></TouchableOpacity>
          </View>
        </View> 
        <View style={{}}>
          <TouchableOpacity color={'#1952E2'} onPress={()=>{navigation.navigate('ColorDetail')}} >
            <Button title='XONG'></Button>
          </TouchableOpacity>
        
        </View>
      </View>
    
    </>
  )
}
function Color({props , navigation}) {
  const [color , setColor] = React.useState('blue')
  return (
    <>
      <View style={{flex: 1 }}>
        <View style={{flex : 1 ,flexDirection  :'row'}}>
          <View style={{width : 100 , height : 100}}>
            <Image style={{width : '100%' , height:'100%'}} resizeMode='contain' source={blue}></Image>
          </View>
          <View>
            <Text style={{fontSize : 18 , fontWeight : 500}}>Điện thoại Vsmart Joy3</Text>
            <Text style={{fontSize : 18 , fontWeight : 500}}>Hàng chính hãng</Text>
          </View>
        </View>
       <View style={{paddingVertical : 20 , paddingHorizontal : 20 ,flex:5 , backgroundColor : '#C4C4C4'}}>
          <Text>Chọn 1 màu bên dưới</Text>
          <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#C5F1FB' , marginBottom : 10 }} onPress={()=>{ setColor('silver') }  } >

            </TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#F30D0D' , marginBottom : 10}} onPress={()=>{ setColor('red')}} ></TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#000000' , marginBottom : 10}} onPress={()=>{ setColor('black')}}></TouchableOpacity>
            <TouchableOpacity style ={{width : 85 , height : 80 , backgroundColor :'#234896' , marginBottom : 10}}onPress={()=>{ setColor('blue')}} ></TouchableOpacity>
          </View>
        </View> 
        <View style={{}}>
        <TouchableOpacity  color={'#1952E2'}  >
          <Button title = "Xong" onPress={()=>{navigation.navigate('ColorDetail', {
            color : color,
          })}}></Button>
        </TouchableOpacity>

        </View>
      </View>
    
    </>
  )
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='Color' component={Color} />
        <Stack.Screen name='ColorDetail' component={ColorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;