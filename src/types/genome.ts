export interface GenomeSequence {
    id: string;
    sequence: string;
    length: number;
}

export interface Annotation {
    id: string;
    start: number;
    end: number;
    description: string;
}

export interface GenomeData {
    sequences: GenomeSequence[];
    annotations: Annotation[];
}