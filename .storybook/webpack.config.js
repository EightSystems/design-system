module.exports = async ({ config }) => {
  console.log(config)
  config.resolve.extensions.push('.svg');
  config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test( String( data.test ) )) {
          data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      }
      return data;
  });
  
  config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
          {
              loader: "url-loader",
              options: {
                  limit: 123456789,
              },
          },
      ],
  });
  
  return config;
};
