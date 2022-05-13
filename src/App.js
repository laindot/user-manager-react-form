import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Container>
      <div style={{ marginTop: '15%' }}>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((x) => (
              <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Container>
  );
}

export default App;
