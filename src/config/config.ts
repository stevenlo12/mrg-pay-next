
export interface IConfig {
  environment: string;
}

const config: IConfig = {
  environment: process.env.ENV || process.env.NEXT_PUBLIC_ENV || '',
};

export { config };
