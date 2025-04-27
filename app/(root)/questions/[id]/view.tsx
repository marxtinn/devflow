"use client";

import { toast } from "@/hooks/use-toast";
import { incrementViews } from "@/lib/actions/question.action";
import { useEffect } from "react";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });
    if (result.success) {
      toast({
        title: "Success",
        description: "Views incremented",
      });
    } else {
      toast({
        title: "Error",
        description: result.error?.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    handleIncrement();
  }, []);

  return null;
};

export default View;
