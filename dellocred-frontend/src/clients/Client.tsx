import React, { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import './Client.css';

// Types
interface Client {
  uuid: string;
  govId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  isActive: boolean;
}

type NewClient = Omit<Client, 'uuid'>;

// API Service
const api = axios.create({
  baseURL: 'http://localhost:3000/clients/',
});

const getActiveClients = () => api.get<Client[]>('actives/');
const createClient = (client: NewClient) => api.post<Client>('/', client);
const deleteClientById = (uuid: string) => api.delete(`/${uuid}`);

function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [newClient, setNewClient] = useState<NewClient>({
    govId: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    isActive: true,
  });
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data } = await getActiveClients();
      setClients(data);
    } catch (error) {
      console.error('Failed to fetch clients:', error);
    }
  };

  const handleAddClient = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await createClient(newClient);
      setClients(prev => [...prev, data]);
      setNewClient({
        govId: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        isActive: true,
      });
    } catch (error) {
      console.error('Failed to add client:', error);
    }
  };

  const handleDeleteClient = async (uuid: string) => {
    try {
      await deleteClientById(uuid);
      setClients(prev => prev.filter(client => client.uuid !== uuid));
    } catch (error) {
      console.error('Failed to delete client:', error);
    }
  };

  const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 1000);
    })
    .catch(err => console.error('Failed to copy:', err));
};

  return (
    <div className="clients-container">
      <h1>Gerenciamento de Clientes</h1>

      <section className="form-section">
        <h2>Adicionar Cliente</h2>
        <form onSubmit={handleAddClient} className="client-form">
          <input
            type="text"
            placeholder="CPF"
            value={newClient.govId}
            onChange={e => setNewClient({ ...newClient, govId: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Nome"
            value={newClient.firstName}
            onChange={e => setNewClient({ ...newClient, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Sobrenome"
            value={newClient.lastName}
            onChange={e => setNewClient({ ...newClient, lastName: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newClient.email}
            onChange={e => setNewClient({ ...newClient, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Endereço"
            value={newClient.address}
            onChange={e => setNewClient({ ...newClient, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            value={newClient.phone}
            onChange={e => setNewClient({ ...newClient, phone: e.target.value })}
            required
          />
          <button type="submit">Adicionar</button>
        </form>
      </section>

      <section className="list-section">
        <h2>Clientes</h2>
        <ul className="client-list">
          {clients.map(({ uuid, govId, firstName, lastName, email, address, phone }) => (
            <li key={uuid} className="client-item">
              <div className="client-header">
                {firstName} {lastName}

              </div>
              
              <div className="client-details">
                <div className="email-section">
                  {govId}
                </div>
                <div className="phone-section">
                  {phone}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(phone)}
                    title="Copy phone to clipboard"
                  > Copiar </button>
                  {copiedPhone === phone && (
                    <span className="copy-alert">Copiado!</span>
                  )}
                </div>
                <div className="email-section">
                  {email}
                </div>
                <div className="address-section">
                  {address}
                </div>
              </div>
              <button onClick={() => handleDeleteClient(uuid)} className="delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Clients;