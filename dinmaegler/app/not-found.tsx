import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EEF7FF] p-4">
      <div className="text-center flex flex-col items-center space-y-6 max-w-md">
        <div 
          className="relative w-1/2 flex justify-center"
          style={{
            background: "linear-gradient(to bottom, #EEF7FF 60%, #162A41 40%)",
            padding: "20px 0",
          }}
        >
          <h1 
            className="text-8xl font-bold tracking-tighter text-white"
            style={{
              WebkitTextStroke: "2px black", // Font border
            }}
          >
            Hov!
          </h1>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-[#1e2a3b]">
            Du er havnet på en side som ikke findes!
          </h2>
          <p className="text-[#4a5568] text-sm">
            Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.
          </p>
        </div>
        <Button asChild className="bg-[#1e2a3b] hover:bg-[#2d3748] text-white font-medium px-6 py-2 rounded">
          <Link href="/">
            Tilbage til forsiden
          </Link>
        </Button>
      </div>
    </div>
  )
}
