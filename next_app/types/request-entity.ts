export interface VelvetRequestData {
  _id: string;
  order: string;
  unlock: string | null;
  title: string;
  deadline: string | null;
  solution: string;
  reward: string;
}

export interface VelvetRequestsPage {
  data: VelvetRequestData[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}