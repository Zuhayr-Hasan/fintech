import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* Customize the status bar */}
        <StatusBar style="dark" backgroundColor="#fff" />
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  );
}
