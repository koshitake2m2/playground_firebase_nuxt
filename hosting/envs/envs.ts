export type EnvironmentType = 'loc' | 'dev' | 'prd'

export type Environments = {
  type: EnvironmentType
  baseUrl: string
}

const locEnvs: Environments = {
  type: 'loc',
  baseUrl: 'http://localhost:3000',
}
const devEnvs: Environments = {
  type: 'dev',
  baseUrl: 'http://localhost:3000',
}
const prdEnvs: Environments = {
  type: 'prd',
  baseUrl: 'http://playground-koshitake2m2.web.app',
}

export const environments: Environments =
  process.env.NODE_ENV === 'production'
    ? prdEnvs
    : process.env.NODE_ENV === 'development'
      ? devEnvs
      : locEnvs
