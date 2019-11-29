export default {
    STRIPE_KEY: "pk_test_wuOVzTilVk1oxW44ODQvzv9Q00Fkz0lpth",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-stone"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://7287tfs5j3.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_y1msIjrm7",
      APP_CLIENT_ID: "5si0mhsvmck1i6r280up95pf0j",
      IDENTITY_POOL_ID: "us-east-2:244f501c-2a6d-42cf-a900-620b60e8adb7"
    }
  };