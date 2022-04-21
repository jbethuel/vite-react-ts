type Build = 'prod' | 'dev';

export const environmentVariables = {
  SAMPLE_ENV: process.env.SAMPLE_ENV as Build,
};
