import './App.css';
import { useState } from 'react';
import useForm from './hooks/useForm';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange, reset] = useForm({
    name: '',
    lastname: '',
    email: '',
  });
  console.log(form, users);

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };

  return (
    <Container>
      <div style={{ marginTop: '15%' }}>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label='Name'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Name'
              />
              <Input
                label='Last Name'
                name='lastname'
                value={form.lastname}
                onChange={handleChange}
                placeholder='Last Name'
              />
              <Input
                label='Email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Email'
              />
              <Button>Submit</Button>
            </form>
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
