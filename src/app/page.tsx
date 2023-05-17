'use client';
import { useState } from 'react';
import { useAuth } from './hooks/Auth';
import { SurrealDatabase, SurrealInstance, SurrealNamespace } from '@/app/lib/Surreal';

export default function Home() {
  const { data, setData } = useAuth();

  const [ identifier, setIdentifier ] = useState<string>();
  const [ password, setPassword ] = useState<string>();

  const signin = async () => {
    console.log(`Signing in as ${identifier}...`);

    const token = await SurrealInstance.signin({
      NS: SurrealNamespace,
      DB: SurrealDatabase,
      SC: 'user',
      identifier: identifier,
      password: password
    });

    setData({ token: token });
  }

  return (
    <main>
      Token: {data.token}

      <div>
        <input type="text" placeholder="Identifier..." onChange={(e) => setIdentifier(e.currentTarget.value)} />
        <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.currentTarget.value)} />
        <button type="submit" onClick={signin}>Sign in</button>
      </div>
    </main>
  )
}
