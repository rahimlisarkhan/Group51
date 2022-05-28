class App extends React.Component {
  render() {
    let menuArr = ["Home", "About", "Contact", "Blog"];

    let resultData = [
      { name: "John", age: 23 },
      { name: "Marry", age: 43 },
    ];

    return (
      <>
        <Header menuData={menuArr} />
        <Box
          className="bg-warning"
          ruslan="salam"
          data={resultData}
          yas={28}
          tagi={<p>Lorem</p>}
          isMaried={false}
          //   handleJob={() => {
          //     alert("salam");
          //   }}
        />
        <Button
          width={250}
          height={100}
          color="red"
          p={10}
          m={20}
          textColor="yellow"
          radius="rounded"
        >
          Send
        </Button>
        <Button color="yellow" p={5} m={10} textColor="white">
          Reset
        </Button>
        <h1 className="text-danger">Test React</h1>
      </>
    );
  }
}
