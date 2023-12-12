import axios from "axios";
import { useEffect, useState } from "react";
import TurkeyMap from "turkey-map-react";



function App() {
  const [city,setCity] = useState("")
  const [response, setResponse] = useState("")
  const key = "e578d19f8b7f817b5ba0a438711127cf"
 
  

 useEffect(() => {
  async function getApi(){
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=tr&`)
      setResponse(response)
    } catch (error) {
        console.log(error)
    }
  }

  if(city !== ""){
    getApi()
  }
 },[city])

  console.log(response)
  return (
    <div>
      <TurkeyMap
      onClick={({name}) => setCity(name)}
      />
      {response && <div>
          <h1>{response.data.name}</h1>
          <h2>Derece: {response.data.main.temp}</h2>
          <h2>Nem: %{response.data.main.humidity}</h2>
          <h2>Açıklama: {response.data.weather[0].description}</h2>
        </div>}
    </div>
  );
}

export default App;
