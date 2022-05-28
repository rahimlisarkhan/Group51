class Header extends React.Component {
  render() {
    console.log(this, "this");

    return (
      <div>
        <ul>
          {this.props.menuData.map((item, index) => (
            <li key={`menu-item-${index}`}>{item}</li>
          ))}

        </ul>
      </div>
    );
  }
}
