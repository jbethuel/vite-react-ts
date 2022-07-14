type Build = 'prod' | 'dev';

export const environmentVariables = {
  ENVIRONMENT: process.env.ENVIRONMENT as Build,
};
