export interface SqlRepository
{
  saveClient(client: any): Promise<number>;
  setClient(client: any): Promise<void>;
  getClient(clientId: number): Promise<any>;
  deleteClient(clientId: number): Promise<void>;

  saveAgency(agency: any): Promise<number>;
  setAgency(agency: any): Promise<void>;
  getAgency(agencyId: number): Promise<any>;
  deleteAgency(agencyId: number): Promise<void>;

  saveTreep(treep: any): Promise<number>;
  setTreep(treep: any): Promise<void>;
  getTreep(treepId: number): Promise<any>;
  deleteTreep(treepId: number): Promise<void>;

  saveDate(date: any): Promise<number>;
  setDate(date: any): Promise<void>;
  getDate(dateId: number): Promise<any>;
  deleteDate(dateId: number): Promise<void>;

}
