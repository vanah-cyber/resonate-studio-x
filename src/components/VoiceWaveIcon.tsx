import { cn } from "@/lib/utils";

interface VoiceWaveIconProps {
  className?: string;
  animated?: boolean;
}

export const VoiceWaveIcon = ({ className, animated = true }: VoiceWaveIconProps) => {
  return (
    <div className={cn("flex items-end justify-center space-x-1", className)}>
      <div className={cn(
        "w-1 bg-gradient-primary rounded-full", 
        animated && "animate-wave",
        "h-4"
      )} />
      <div className={cn(
        "w-1 bg-gradient-primary rounded-full", 
        animated && "animate-wave-delay-1",
        "h-6"
      )} />
      <div className={cn(
        "w-1 bg-gradient-primary rounded-full", 
        animated && "animate-wave-delay-2",
        "h-8"
      )} />
      <div className={cn(
        "w-1 bg-gradient-primary rounded-full", 
        animated && "animate-wave-delay-3",
        "h-6"
      )} />
      <div className={cn(
        "w-1 bg-gradient-primary rounded-full", 
        animated && "animate-wave-delay-4",
        "h-4"
      )} />
    </div>
  );
};