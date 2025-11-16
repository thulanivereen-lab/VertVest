import { User } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../lib/supabaseClient';

const AuthNavigator: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else setUser(data.user);
  }

  async function signUp() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert('Check your email for confirmation link');
  }

  if (user) {
    return (
      <View style={styles.container}>
        <Text>Welcome, {user.email}</Text>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vert Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
});

export default AuthNavigator;
