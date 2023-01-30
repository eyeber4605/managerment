import './App.css';
import Customer from './components/Customer';

const customer = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '920227',
  'gender' : '남자',
  'job' : '백수'
  },
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '동길홍',
  'birthday' : '920227',
  'gender' : '여자',
  'job' : '프로그래머'
  },
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '길동호',
  'birthday' : '920227',
  'gender' : '남자',
  'job' : '씹백수'
  }
]

function App() {
  return (
    <div>
    {
      customer.map (c => {
        return (
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job} />
        )
      })
    }
    </div>
  );
}

export default App;
