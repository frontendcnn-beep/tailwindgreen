import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
})

// import { defineConfig } from 'vite' ok
// import tailwindcss from '@tailwindcss/vite'add

// export default defineConfig({ ok
//   plugins: [
//     tailwindcss(),
//   ],
// })