import Particulates from "./Particulates";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const API_KEY = process.env.REACT_APP_PARTICULATES_KEY;
  const url = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${API_KEY}&returnType=json&year=2022`;
  axios.get(url).then((res) => console.log(res.data.response.body));

  // const pinfo = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     console.log(url);
  //     console.log(response);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   pinfo();
  // }, []);

  return (
    <div>
      <Particulates />
    </div>
  );
}

export default App;
