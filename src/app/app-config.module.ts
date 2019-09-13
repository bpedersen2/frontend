import { NgModule, InjectionToken } from "@angular/core";
import { environment } from "../environments/environment";

export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export class AppConfig {
  externalAuthEndpoint: string;
  fileserverBaseURL: string;
  synapseBaseUrl: string;
  riotBaseUrl: string;
  production: boolean;
  disabledDatasetColumns: string[];
  archiveWorkflowEnabled: boolean;
  editMetadataEnabled: boolean;
  editSampleEnabled: boolean;
  scienceSearchEnabled: boolean;
  facility: string;
  shoppingCartEnabled: boolean;
  multipleDownloadEnabled: boolean;
  multipleDownloadAction?: string;
  maxDirectDownloadSize: number;
  sftpHost: string;
  columnSelectEnabled: boolean;
  userProfileImageEnabled: boolean;
  logbookEnabled: boolean;
  tableSciDataEnabled: boolean;
  datasetReduceEnabled: boolean;
  fileColorEnabled: boolean;
  metadataPreviewEnabled: boolean;
  ingestManual: string;
  gettingStarted: string;
  searchSamples: boolean;
  searchProposals: boolean;
  searchPublicDataEnabled: boolean;
}

export const APP_DI_CONFIG: AppConfig = {
  externalAuthEndpoint: environment.externalAuthEndpoint,
  fileserverBaseURL: environment["fileserverBaseURL"] || null,
  synapseBaseUrl: environment["synapseBaseUrl"] || null,
  riotBaseUrl: environment["riotBaseUrl"] || null,
  production: environment.production,
  disabledDatasetColumns: environment["disabledDatasetColumns"] || [],
  archiveWorkflowEnabled: environment["archiveWorkflowEnabled"] || null,
  editMetadataEnabled: environment["editMetadataEnabled"] || null,
  editSampleEnabled: environment["editSampleEnabled"] || null,
  scienceSearchEnabled: environment["scienceSearchEnabled"] || null,
  facility: environment["facility"] || null,
  shoppingCartEnabled: environment["shoppingCartEnabled"] || false,
  multipleDownloadEnabled: environment["multipleDownloadEnabled"] || false,
  multipleDownloadAction: environment["multipleDownloadAction"],
  maxDirectDownloadSize: environment["maxDirectDownloadSize"] || null,
  sftpHost: environment["sftpHost"] || null,
  columnSelectEnabled: environment["columnSelectEnabled"] || false,
  userProfileImageEnabled: environment["userProfileImageEnabled"] || false,
  logbookEnabled: environment["logbookEnabled"] || false,
  tableSciDataEnabled: environment["tableSciDataEnabled"] || false,
  datasetReduceEnabled: environment["datasetReduceEnabled"] || false,
  fileColorEnabled: environment["fileColorEnabled"] || false,
  metadataPreviewEnabled: environment["metadataPreviewEnabled"] || false,
  ingestManual: environment["ingestManual"] || null,
  gettingStarted: environment["gettingStarted"] || null,
  searchProposals: environment["searchProposals"] || false,
  searchSamples: environment["searchSamples"] || false,
  searchPublicDataEnabled: environment["searchPublicDataEnabled"] || false
};

@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG
    }
  ]
})
export class AppConfigModule {}
