// import logo from './logo.svg';
import './App.css';
import Photos from './photos/Photos';

function App() {
<<<<<<< HEAD
  state = {
    title: [],
    searchTerm: "",
  };
  getSearchValue = (search) => {
    this.setState({ searchTerm: search });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => this.setState({ title: res.data }));
  }
  render() {
    const { title, searchTerm } = this.state;
    const filterUser = title.filter((user) =>
      user.title.includes(searchTerm));
    // console.log(filterUser);
    return (
      <div>
        <Searchs getSearchValue={this.getSearchValue}></Searchs>
        <div className="container">
          {filterUser.map((user, index) => (
            <div className="card" key={index}>
              <img src={`https://robohash.org/${index}?set=set3`}
                alt="images" />
              <div className='userId'>{user.userId}</div>
              <div className="title">{user.title}</div>

            </div>
          ))}
        </div>
      </div>
    )
  }
=======
  return (
    <div>
      <Photos/>
    </div>
  );
>>>>>>> 538ad5021dc5f1f46684d37405dc72d866ea8a87
}

export default App;
