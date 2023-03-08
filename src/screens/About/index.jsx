import { FlatList, View, Text, Image } from "react-native";

const About = () => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 0, backgroundColor: '#F3C850', borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>

            <View>
                <Image style={{ width: 150, height: 150, padding: 5, marginLeft: 5 }} source={{ uri: 'https://ypt.or.id/wp-content/uploads/2019/01/Logo-Primer-Vertikal-ITTelkom-Surabaya-White-300x300.png' }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'flex-start' }}>
                <Image style={{ width: 65, height: 65, borderRadius: 100 }} source={{ uri: 'https://img.freepik.com/free-vector/flat-dodge-coin-illustration_23-2149209807.jpg?w=740&t=st=1676010661~exp=1676011261~hmac=64f4b8e488555d154dcc2d2ab32b7fd8a40848e81708312101ff077d4b20599d' }} />
                <View style={{alignItems: 'center'}}>
                <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>CoinTracker</Text>
                <Text style={{ color: '#4A0478', paddingHorizontal: 1, fontSize: 10, fontWeight: 'bold' }}>Version: 1.0</Text>
                </View>
            </View>
            <Text style={{ color: '#4A0478', fontSize: 20, fontWeight: 'bold', marginBottom: 20, textDecorationLine: 'underline' }}>Team Developer</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'flex-start' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#4A0478', borderWidth: 1, justifyContent: 'flex-start' }} source={require('../../../assets/jody.jpg')} />
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>Jody Kurniawan Sagita</Text>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 15 }}>1204201240</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'flex-start' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#4A0478', borderWidth: 1 }} source={require('../../../assets/bintang.jpeg')} />
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>Bintang Rasya Nugraha</Text>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 15 }}>1204200020</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'flex-start' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#4A0478', borderWidth: 1 }} source={require('../../../assets/daniel.jpeg')} />
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>Daniel Christian Winoto</Text>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 15 }}>1204200072</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'flex-start' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#4A0478', borderWidth: 1 }} source={require('../../../assets/joe.jpg')} />
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>Mohammad Joe Prizzy</Text>
                        <Text style={{ color: '#4A0478', paddingHorizontal: 10, fontSize: 15 }}>1204200195</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default About;