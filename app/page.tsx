import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaceIcon } from "@radix-ui/react-icons"


export default function Home() {
  return (
    <main>
      <div class="container mx-auto pt-5">
        <Alert>
          <FaceIcon className="h-5 w-5" />
          <AlertTitle>Oooofa Blecher!</AlertTitle>
          <AlertDescription>
            This is my first try with shadcnUI and tailwind on our next project
          </AlertDescription>
        </Alert>   
      </div>  
    </main>
  );
}
