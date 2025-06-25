
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "react-image-upload",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // S3 bucket for image storage
    const bucket = new sst.aws.Bucket("ImageBucket", {
      cors: {
        allowCredentials: false,
        allowHeaders: ["*"],
        allowMethods: ["GET", "POST", "PUT", "DELETE"],
        allowOrigins: ["*"],
      },
    });

    // React app hosted on AWS
    const web = new sst.aws.StaticSite("ReactApp", {
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        VITE_BUCKET_NAME: bucket.name,
      },
    });

    return {
      web: web.url,
      bucket: bucket.name,
    };
  },
});
