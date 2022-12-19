import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initAsyncStorageValues } from './src/common/async-storage';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { MenuProvider } from 'react-native-popup-menu';
import { TaskProvider } from './src/services/dataService';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    async function init() {
      await initAsyncStorageValues();
    }
    init().catch(console.error);
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TaskProvider>
          <MenuProvider>
            <Navigation colorScheme={colorScheme} />
          </MenuProvider>
        </TaskProvider>
      </SafeAreaProvider>
    );
  }
}
