/*********************************************************************************************** /
                                        Interfaces
/********************************************************************************************** */
export interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId?: string
}

export interface ISentryConfig {
  dsn: string
}

export interface IAlgoliaConfig {
  searchOnlyAPIKey: string
  applicationID: string
}

export type SiteVariants =
  | 'emulated_site'
  | 'dev_site'
  | 'beta_dev_site'
  | 'test-ci'
  | 'staging'
  | 'production'
  | 'preview'
