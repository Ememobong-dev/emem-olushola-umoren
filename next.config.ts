const nextConfig = {
	typescript: {
	  ignoreBuildErrors: true,
	},
  
	async redirects() {
	  return [
		// Redirect Vercel domain
		{
		  source: "/:path*",
		  has: [
			{
			  type: "host",
			  value: "emem-olushola.vercel.app",
			},
		  ],
		  destination: "https://www.ememolushola.com.ng/:path*",
		  permanent: true,
		},
  
		// Redirect non-www to www
		{
		  source: "/:path*",
		  has: [
			{
			  type: "host",
			  value: "ememolushola.com.ng",
			},
		  ],
		  destination: "https://www.ememolushola.com.ng/:path*",
		  permanent: true,
		},
	  ];
	},
  };
  
  export default nextConfig;