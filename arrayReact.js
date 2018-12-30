const data = {
  users: [
      {
      id: 1,
      name: "Adam",
      sex: "M",
      dateOfBirth: "23051991"
    },
    {
      id: 2,
      name: "Krystian",
      sex: "M",
      dateOfBirth: "23051993"
    },
    {
      id: 3,
      name: "Bartek",
      sex: "M",
      dateOfBirth: "23051992"
    },
    {
      id: 4,
      name: "Ania",
      sex: "K",
      dateOfBirth: "23051994"
    },
    {
      id: 5,
      name: "Basia",
      sex: "K",
      dateOfBirth: "23051999"
    }
  ]
}
const LiItems = (props) => (
  <div>
    <h3>Użytkownik {props.user.name}</h3>
    <h3>Urodzony/a {props.user.dateOfBirth}</h3>
  </div>
)
const Item = (props) => <li>{`owoc ${props.content}`}</li>
class ArrayReact extends React.Component {
  state = {
    myArray: ['jozka', 'staszek', 'sylwek', 'bartek', 'ziomeczek', 'Jusia', 'wiktor']
  }
  render() {
    const users = this.props.data.users
    const Items = this.state.myArray.map(item => <Item key={item} content={item}/>)
    const LiItemss = users.map(user => <LiItems key={user.id} user={user} />)
    return (
      <ul>
        {/* <li>{this.state.myArray[0]}</li> */}
        {Items}
        {this.state.myArray.map(item => <li key={item}>{`owocek ${item}`}</li>)}
        {LiItemss}
      </ul>
    )
  }
}
ReactDOM.render(<ArrayReact data={data} />, document.getElementById('root'))