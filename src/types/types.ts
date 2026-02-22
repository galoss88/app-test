export interface IPositionsApi {
  id: string;
  title: string;
}

export interface IBodyApplyPosition {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}
