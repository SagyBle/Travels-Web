"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaceIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");

      const data = await response.json();
      setFact(data.fact);
      console.log(data.fact);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <div className="container mx-auto pt-5">
        <Alert>
          <FaceIcon className="h-5 w-5" />
          <AlertTitle>Oooofa Blecher!</AlertTitle>
          <AlertDescription>
            This is my first try with shadcnUI and tailwind on our next project
          </AlertDescription>
        </Alert>
        <Alert>
          <FaceIcon className="h-5 w-5" />
          <AlertTitle>Oooofa CAT!</AlertTitle>
          <AlertDescription>{fact}</AlertDescription>
        </Alert>
      </div>
    </main>
  );
}
