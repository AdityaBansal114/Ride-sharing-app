import React from 'react';
import { toast } from 'react-hot-toast';

const PublishPage = () => {
    const handlePublish = () => {
        // Show a toast notification
        toast.success("Your ride has been published successfully!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-4">Publish Page</h1>
            <button 
                onClick={handlePublish} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Publish Ride
            </button>
        </div>
    );
}

export default PublishPage;