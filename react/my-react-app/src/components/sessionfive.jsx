// Conditionals in JSX:
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
}

// Lists in JSX:
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Styling in JSX:
function StyledComponent() {
  const style = {
    color: 'blue',
    fontSize: '24px',
    backgroundColor: '#f0f0f0'
  };
  
  return <div style={style}>Styled text</div>;
}


// Function Components (Modern Way):
export function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function version
const Welcomearrow = () => {
  return <h1>Hello, World!</h1>;
};

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}

// Props
// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

//Destructuring Props (Cleaner):
// Instead of props.name
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Multiple props
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

<UserCard name="Alice" age={25} email="alice@email.com" />