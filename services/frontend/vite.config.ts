import { fileURLToPath } from "node:url";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
	server: {
		host: true,
		port: Number(process.env.FRONTEND_PORT) || 3000,
	},
	resolve: {
		alias: {
			"@components": fileURLToPath(new URL("components", import.meta.url)),
			"@public": fileURLToPath(new URL("public", import.meta.url)),
			"@src": fileURLToPath(new URL("src", import.meta.url)),
			"@utils": fileURLToPath(new URL("utils", import.meta.url)),
			"@hooks": fileURLToPath(new URL("hooks", import.meta.url)),
		},
	},
});
