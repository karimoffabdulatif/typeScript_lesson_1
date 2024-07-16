import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@pages", replacement: "/src/pages/index.tsx" },
      { find: "@auth-type", replacement: "/src/types/auth.ts" },
      { find: "@service", replacement: "/src/service/index.ts" },
      { find: "@modal", replacement: "/src/components/modal" },
    ],
  },
})
