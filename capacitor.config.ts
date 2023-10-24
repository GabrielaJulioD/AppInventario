import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'aplicacion-inventario',
  webDir: 'dist/aplicacion-inventario',
  server: {
    androidScheme: 'https'
  }
};

export default config;
