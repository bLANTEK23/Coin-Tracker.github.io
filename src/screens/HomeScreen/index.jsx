import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text , Image} from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderColor: 'purple'}}>
        <Image style={{width: 40, height: 40, padding: 5,borderRadius:100, marginLeft: 10, alignSelf:'center'}} source={{uri: 'https://img.freepik.com/free-vector/flat-dodge-coin-illustration_23-2149209807.jpg?w=740&t=st=1676010661~exp=1676011261~hmac=64f4b8e488555d154dcc2d2ab32b7fd8a40848e81708312101ff077d4b20599d'}}/>
        <Text style={{ fontFamily: 'DroidSans', color: "white", fontSize: 20, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>CoinTracker</Text>
        <Text style={{color: 'lightgrey', fontSize: 12, paddingHorizontal: 10}}>Powered by CoinGecko</Text>
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
