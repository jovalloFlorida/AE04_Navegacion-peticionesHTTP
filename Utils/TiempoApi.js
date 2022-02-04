import * as React from "react";
import { Text, Image, ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export const TiempoApi = () => {
  //llamadas axios a API
  const [datos, setDatos] = useState([]);
  const [codigoProvincia, setcodigoProvincia] = useState([]);
  const [poblacion, setPoblacion] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const [tiempoActual, setTiempoActual] = useState([]);
  const [temperaturaMaxima, setTemperaturaMaxima] = useState([]);
  const [temperaturaMinima, setTemperaturaMinima] = useState([]);
  const [today, setToday] = useState([]);
  const [tomorrow, setTomorrow] = useState([]);

  const searchTerm = "46"; //Codigo 46 que pertenece a la Provincia de Valencia

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    const res = await axios.get(
      `https://www.el-tiempo.net/api/json/v2/provincias/${searchTerm}`
    );
    setDatos(res.data);
    setcodigoProvincia(res.data.ciudades[0].idProvince);
    setPoblacion(res.data.ciudades[0].name);
    setProvincia(res.data.ciudades[0].nameProvince);
    setTiempoActual(res.data.ciudades[0].stateSky.description);
    setToday(res.data.today.p);
    setTomorrow(res.data.tomorrow.p);
    setTemperaturaMaxima(res.data.ciudades[0].temperatures.max);
    setTemperaturaMinima(res.data.ciudades[0].temperatures.min);
    //console.log(res.data);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ borderWidth: 0, paddingTop:25, paddingBottom: 20 }}>
        <Text style={{ fontSize: 20, color: "blue" }}>{datos.title}</Text>
      </View>

      <View style={{ borderWidth: 0, paddingBottom: 20 }}>
        <View style={styles.card}>
          <Text>Poblacion: {poblacion}</Text>
          <Text>Provincia: {provincia}</Text>
          <Text>Cod. Provincia: {codigoProvincia}</Text>
          <View style={{ borderWidth: 0, paddingBottom: 10, paddingTop: 10 }}>
            <Text>Tiempo Actual: {tiempoActual}</Text>
            </View>
            <Text>Temp. Max.: {temperaturaMaxima}</Text>
            <Text>Temp. Min.: {temperaturaMinima}</Text>
        </View>
      </View>

      <View style={{ borderWidth: 0, paddingBottom: 10 }}>
        <View style={styles.cardTiempo}>
          <View style={{ borderWidth: 0, paddingBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Tiempo previsto para hoy...
            </Text>
          </View>
          <ScrollView nestedScrollEnabled={true}>
            <Text style={{ fontSize: 15 }}>{today}</Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.cardTiempo}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ borderWidth: 0, paddingBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Tiempo previsto para mañana...
            </Text>
          </View>
          <Text style={{ fontSize: 15 }}>{tomorrow}</Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    card: {
    width: 350,
    height: 180,
    padding: 24,
    borderWidth: 1,
    borderColor: "#E7E3EB",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },
  cardTiempo: {
    width: 350,
    height: 175,
    padding: 24,
    borderWidth: 1,
    borderColor: "#E7E3EB",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },
});

export default TiempoApi;
