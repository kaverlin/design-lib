export type ChartInputData = {
    type: string, 
    labels?: any[], 
    dataSet: DatasetInputData[]
} 


export type DatasetInputData = {
    data: number[], 
    label: string,
    colors?: string[]
}