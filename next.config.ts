const nextConfig = {
	typescript: {
	  ignoreBuildErrors: true,
	},
  
	async redirects() {
	  return [
		{
		  source: "/:path*",
		  has: [
			{
			  type: "host",
			  value: "emem-olushola.vercel.app",
			},
		  ],
		  destination: "https://ememolushola.com.ng/:path*",
		  permanent: true,
		},
	  ];
	},
  };
  
  export default nextConfig;