class Box extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.data.map((user, index) => {
          return (
            <p key={`user-${index}`}>
              {user.name} - {user.age}
            </p>
          );
        })}

        {/* <h1>Box</h1>
          <p>{this.props.ruslan}</p>
          <p>{this.props.isMaried}</p>
          {this.props.tagi} */}
        {/* {this.props.handleJob()} */}
      </div>
    );
  }
}
