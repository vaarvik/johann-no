import checkEnvVariables from './server-utils/check-env-variables.mjs';

// Validate that the given env variables are set on startup
checkEnvVariables();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
