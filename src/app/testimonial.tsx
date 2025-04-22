import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";

export default function Testimonial({
    student: {
        name,
        badge = 'Verified Graduate',
        image,
    },
    text,
    quote,
    className = ''
}: {
    student: { 
        name: string, 
        badge?: string, 
        image: { src: string, className?: ClassValue }
    };
    text: string;
    quote: string;
    className?: string
}) {
    return (
        <div className={cn(
            'flex flex-col gap-5 rounded-lg shadow-2xl',
            'p-8 pt-6',
            className
        )}>
            <div className="flex items-center gap-3">
                <Image 
                    src={image.src}
                    alt={name + '\'s image'}
                    width={500}
                    height={500}
                    className={cn(
                        'rounded-full border-2',
                        'size-8',
                        image.className
                    )}
                />
                <div>
                    <h2 className="text-sm">{ name }</h2>
                    <h3 className="text-xs font-light">{ badge }</h3>
                </div>
            </div>
            
            <p className="text-lg/6 font-semibold">
                { text }
            </p>

            <p className="text-xs/4 ml-1 mr-1">
                { quote }
            </p>
        </div>
    );
}