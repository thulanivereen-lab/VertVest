import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './navigation/AuthNavigator';
import { checkAuthStatus } from './utils/auth';

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function init() {
      // TODO: const auth = await checkAuthStatus();
      setIsAuthenticated(checkAuthStatus);
    }
    init();
  }, []);

  if (isAuthenticated === null) return null; // or a loading spinner

  return isAuthenticated ? <Redirect href="/(tabs)" /> : <AuthNavigator />;
}
