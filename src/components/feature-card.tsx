import type { ReactNode } from 'react';
import { Code, MessageSquare, Shield } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: 'Integration' | 'Messaging' | 'Development';
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    const getIcon = (): ReactNode => {
        switch (icon) {
            case 'Integration':
                return <Code className="h-10 w-10 text-green-400" />;
            case 'Messaging':
                return <MessageSquare className="h-10 w-10 text-green-400" />;
            case 'Development':
                return <Shield className="h-10 w-10 text-green-400" />;
            default:
                return null;
        }
    };

    return (
        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-8 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
            <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-700/50 p-2">
                    {getIcon()}
                </div>
                <div className="mb-4 text-xl font-bold text-white">{title}</div>
            </div>
            <div>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
}
