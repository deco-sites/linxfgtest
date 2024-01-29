interface o {
  a : string
}

const hello = ({a} : o) => {
  return <h1 style={{width: "100%", height: "100%", color: "white", background: "limegreen"}}> Hello Teste </h1>
};

export default hello;
