import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class MyGroup extends Component {
    render() {
        return (
            <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={{
                backgroundColor: "#FFF",
                // flex: 1,
                // paddingBottom:windowHeight*0.5
            }}>

                <View style={{
                    width: windowWidth,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    paddingBottom:windowHeight*0.3
                }}>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                         onPress={() => {
                            Linking.openURL("https://www.reader.com.vn/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/web.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >WebSite</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia c???ng ?????ng ????? c??ng trao ?????i ki???n th???c, g???p g??? giao l??u, v?? nh???n nh???ng b??i h???c mi???n ph??,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgWebPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.facebook.com/khonggiansachcuhanoi/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/GroupFace.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >H???i ch??? s??ch c?? H?? N???i</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
Kh??ng gian s??ch c?? H?? N???i th???a m??n ??am m?? s??ch c?? c???a nh???ng ?????c gi??? mu???n t??m l???i m???t ch??t ho??i ni???m, ho???c ki???m t??m nh???ng ?????u s??ch c??/ c?? gi?? tr???.
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/hoichosachcu.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.facebook.com/bila.docdetruongthanh")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/GroupFace.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Billa - ?????c ????? tr?????ng th??nh</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
BILA ??? ?????c ????? tr?????ng th??nh ra ?????i v???i s??? m???nh c??ng b???n ?????c s??ch, kh??m ph?? th??? gi???i th?? v??? qua trang s??ch v?? ??p d???ng nh???ng ??i???u hay ???? ?????c v??o cu???c s???ng.                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/bila.jpeg')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.youtube.com/channel/UCqewf8j6mYE5TsVMlnlFGXw/featured")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/youtube.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Youtube</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia c???ng ?????ng ????? c??ng trao ?????i ki???n th???c, g???p g??? giao l??u, v?? nh???n nh???ng b??i h???c mi???n ph??,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/youtubeSach.jpeg')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    {/* <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.tiktok.com/@elearncunghoc")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/tiktok.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >TikTok</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia c???ng ?????ng ????? c??ng trao ?????i ki???n th???c, g???p g??? giao l??u, v?? nh???n nh???ng b??i h???c mi???n ph??,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgTiktokPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View> */}

                    
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
