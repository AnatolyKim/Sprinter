export interface ITask {
    id: string; 
    status: string;
    title: string;
    description: string;
    importance: string;
    date: string;
}

export interface IImportanceRates {
    low: string;
    medium: string;
    high: string;
}