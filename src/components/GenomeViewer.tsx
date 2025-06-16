import React, { useEffect, useState } from 'react';
import { GenomeData } from '../types/genome';

const GenomeViewer: React.FC = () => {
    const [genomeData, setGenomeData] = useState<GenomeData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGenomeData = async () => {
            try {
                const response = await fetch('/api/genome-data'); // Adjust the API endpoint as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: GenomeData = await response.json();
                setGenomeData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGenomeData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Genome Visualization App</h1>
            <p>This is a test. If you see this, React is working!</p>
            {genomeData && (
                <div>
                    <h2>Genome Sequence</h2>
                    <p>{genomeData.sequence}</p>
                    <h2>Annotations</h2>
                    <ul>
                        {genomeData.annotations.map((annotation, index) => (
                            <li key={index}>{annotation}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default GenomeViewer;