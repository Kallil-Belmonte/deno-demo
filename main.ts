import router from '@/routes/router.ts';

Deno.serve({ hostname: '0.0.0.0', port: 8000 }, router);
